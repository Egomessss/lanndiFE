import { useEditor } from '@/components/editor/context/EditorInstance';
import React, { useState } from 'react';
import { ActionIcon, Box, Divider, NumberInput, rem, Tooltip } from '@mantine/core';
import { IconArrowAutofitHeight, IconHandGrab, IconZoomIn, IconZoomOut, IconZoomReset } from '@tabler/icons-react';

const FloatingEditorButtons = () => {
  const editor = useEditor();
  const [isActive, setIsActive] = useState(false);
  const [isMoveActive, setIsMoveActive] = useState(false);

  const [zoomValue, setZoomValue] = useState(100); // Initialize the zoom value

  const options = {
    ...{
      // default options
      zoomInKey: ['ctrl', '='],
      zoomOutKey: ['ctrl', '-'],
      panelCategory: 'Custom Category',
    },
    // ...opts,
  };

  // Function to handle zooming
  function handleZoom(isZoomIn: boolean) {
    const currentZoom = editor.Canvas.getZoom();
    const step = 5; // Define the zoom step
    const newZoom = isZoomIn ? currentZoom + step : currentZoom - step;
    // console.log(newZoom);
    editor.Canvas.setZoom(newZoom);
    setZoomValue(newZoom);
  }

// Add keymaps for zooming in anCanvas.d out
  editor.Keymaps.add('zoom-in', options.zoomInKey.join('+'), () => handleZoom(true));
  editor.Keymaps.add('zoom-out', options.zoomOutKey.join('+'), () => handleZoom(false));

// Prevent browser default zoom behavior on CTRL + scroll
  editor.on('load', () => {

    // Prevent browser default zoom behavior on CTRL + scroll
    const canvasBody = editor.Canvas.getBody();
    if (canvasBody) {
      canvasBody.addEventListener('wheel', event => {
        if (event.ctrlKey) {
          event.preventDefault();
          handleZoom(event.deltaY < 0);
        }
      }, { passive: false });
    }
  });


  let debounceTimeout: ReturnType<typeof setTimeout>;

  const handleZoomInput = (value: any) => {
    // Clear any previously scheduled debounce
    clearTimeout(debounceTimeout);

    // Schedule a new debounce with a 1000ms (1 second) delay
    debounceTimeout = setTimeout(() => {
      editor.runCommand('zoomInput', { value: value });

      if (value > 201) {
        editor.Canvas.setZoom(100);
        setZoomValue(100); // Update the zoom value in the state
      } else if (value <= 200) {
        editor.Canvas.setZoom(value);
        setZoomValue(value); // Update the zoom value in the state
      }

      const zoom = editor.Canvas.getZoom();
      setZoomValue(zoom);
    }, 500);
  };


  const handleZoomReset = () => {
    editor.runCommand('zoomReset');
    const zoom = editor.Canvas.getZoom();
    setZoomValue(zoom);
  };

  const handleZoomIn = () => {
    editor.runCommand('zoomIn');
    const zoom = editor.Canvas.getZoom();
    setZoomValue(zoom);
  };

  const handleZoomOut = () => {
    editor.runCommand('zoomOut');
    const zoom = editor.Canvas.getZoom();
    setZoomValue(zoom);
  };
  const handleMoveCanvasScreen = () => {
    if (editor.Commands.isActive('core:canvas-move')) {
      editor.Commands.stop('core:canvas-move');
      setIsMoveActive(false);
    } else {
      editor.Commands.run('core:canvas-move');
      setIsMoveActive(true);
    }
  };


  const handleFitToScreen = () => {
    if (editor.Commands.isActive('change-frame-height')) {
      editor.Commands.stop('change-frame-height');
      setIsActive(false);
    } else {
      editor.Commands.run('change-frame-height');
      setIsActive(true);
    }
  };
  return <Box bg="dark" className="fixed z-[100] w-fit p-2 rounded-lg  m-auto left-0 right-0 bottom-5">
    <div className="flex items-center justify-center gap-2  w-full">
      <Tooltip color="dark" label="Zoom out/ Shift -">
        <ActionIcon
          color="blue"
          variant="subtle"
          disabled={zoomValue < 51}
          onClick={handleZoomOut}
        >
          <IconZoomOut size="1rem" />
        </ActionIcon>
      </Tooltip>
      <NumberInput
        hideControls
        value={editor.Canvas.getZoom()}
        onChange={handleZoomInput}
        max={200}
        size="xs"
        min={50}
        styles={{ input: { width: rem(54), textAlign: 'center' } }}
      />
      <Tooltip color="dark" label="Zoom in / Shift + ">
        <ActionIcon
          color="blue"
          disabled={zoomValue > 199}
          onClick={handleZoomIn}
          variant="subtle"
        >
          <IconZoomIn size="1rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip color="dark" label="Reset zoom & position">
        <ActionIcon
          color="blue"

          variant="subtle"
          onClick={handleZoomReset}
        >
          <IconZoomReset size="1rem" />
        </ActionIcon>
      </Tooltip>
      <Divider orientation="vertical"  />
      <Tooltip
        color="dark"
        w={300}
        multiline
        label={<div className="flex gap-2 flex-col"><p>Active: The frame assumes the body height. </p>
          <p>Inactive: The frame does not assume the body height the frame height is set to 600px.</p>
        </div>}>
        <ActionIcon onClick={handleFitToScreen} variant={isActive ? 'filled' : 'subtle'}>
          <IconArrowAutofitHeight size="1rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip
        color="dark"
        w={300}
        multiline
        label={<div className="flex gap-2 flex-col"><p>Move Canvas or use Left Mouse Click + Spacebar to drag canvas</p>
        </div>}>
        <ActionIcon  onClick={handleMoveCanvasScreen} variant={isMoveActive ? 'filled' : 'subtle'}>
          <IconHandGrab size="1rem" />
        </ActionIcon>
      </Tooltip>
    </div>
  </Box>;
};

export default FloatingEditorButtons;