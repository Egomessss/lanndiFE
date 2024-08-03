import { HTMLProps, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Component } from 'grapesjs';
import { ActionIcon, Menu, TextInput, ThemeIcon, Tooltip } from '@mantine/core';
import { useEditor } from '../wrappers';
import {
  IconBox, IconCheck,
  IconChevronDown,
  IconChevronRight, IconCopy,
  IconDotsVertical, IconEdit,
  IconEye,
  IconLock,
  IconTrash,
} from '@tabler/icons-react';


export declare interface LayerItemProps
  extends HTMLProps<HTMLDivElement> {
  component: Component;
  level: number;
  draggingCmp?: Component;
  dragParent?: Component;
}

const itemStyle = { maxWidth: `100%` };

export default function LayerItem({
                                    component,
                                    draggingCmp,
                                    dragParent,
                                    ...props
                                  }: LayerItemProps) {
  const editor = useEditor();
  const { Layers } = editor;
  const layerRef = useRef<HTMLDivElement>(null);
  const [layerData, setLayerData] = useState(Layers.getLayerData(component));
  // console.log('layer', layerData);
  const [symbolMainInfo, setSymbolMainInfo] = useState(editor.Components.getSymbolInfo(component));


  const { open, selected, hovered, components, visible, name, locked } =
    layerData;
  const componentsIds = components.map((cmp) => cmp.getId());
  const isDragging = draggingCmp === component;
  const cmpHash = componentsIds.join('-');
  const level = props.level + 1;
  const isHovered = hovered || dragParent === component;

  const [layerName, setLayerName] = useState(name);
  const [isEditingLayerName, setIsEditingLayerName] = useState(false);
  console.log(layerName);

  const changeLayerName = () => {
    if (layerName.trim() !== '') {
      Layers.setLayerData(component, { name: layerName });
      setIsEditingLayerName(false);
    }
  };

  useEffect(() => {
    level === 0 && setLayerData(Layers.getLayerData(component));
    if (layerRef.current) {
      ;(layerRef.current as any).__cmp = component;
    }
  }, [Layers, component, level]);

  useEffect(() => {
    const up = (cmp: Component) => {
      cmp === component && setLayerData(Layers.getLayerData(cmp));
    };
    const ev = Layers.events.component;
    editor.on(ev, up);

    return () => {
      editor.off(ev, up);
    };
  }, [editor, Layers, component]);

  const cmpToRender = useMemo(() => {
    return components.map((cmp) => (
      <LayerItem
        // className={
        //     `flex items-center gap-1 p-1 pr-2 ${level === 0 ? '' : ''} ${isHovered ? 'bg-[#228BE6] bg-opacity-60' : ''} ${selected ? 'bg-[#228BE6] ' : ''}`
        // }
        key={cmp.getId()}
        component={cmp}
        level={level}
        draggingCmp={draggingCmp}
        dragParent={dragParent}
      />
    ));
  }, [cmpHash, draggingCmp, dragParent]);

  const toggleOpen = (ev: MouseEvent) => {
    ev.stopPropagation();
    Layers.setLayerData(component, { open: !open });
  };

  const toggleVisibility = (ev: MouseEvent) => {
    ev.stopPropagation();
    Layers.setLayerData(component, { visible: !visible });
  };

  const select = (event: MouseEvent) => {
    editor.select(component);
    event.stopPropagation();
    Layers.setLayerData(component, { selected: true }, { event });
  };

  const hover = (hovered: boolean) => {
    if (!hovered || !draggingCmp) {
      Layers.setLayerData(component, { hovered });
    }
  };

  const lockLayer = (ev: MouseEvent) => {
    ev.stopPropagation();
    Layers.setLocked(component, !locked);
  };


  const wrapperCls = `layer-item flex flex-col rounded-lg text-white ${selected ? 'bg-[#228BE6]/20  ' : ''} ${(!visible || isDragging) ? 'opacity-40' : ''}`;

  const icon = component.get('icon');


  const handleDetachSymbol = useCallback(() => {
    editor.Components.detachSymbol(component);
    // setLayerData(Layers.getLayerData(component));
    setSymbolMainInfo(editor.Components.getSymbolInfo(component));
  }, [editor, component, Layers]);

  return (
    <div className={wrapperCls}>
      <div
        onClick={select}
        onMouseEnter={() => hover(true)}
        onMouseLeave={() => hover(false)}
        className="group max-w-full overflow-hidden"
        data-layer-item=""
        ref={layerRef}
        style={{ paddingLeft: `${level * 4}px` }}
      >
        <div
          className={
            `flex items-center p-1  ${level === 0 ? '' : ''} ${isHovered ? 'cursor-pointer bg-[#228BE6]/10 rounded-md' : ''} ${selected ? 'rounded-md bg-[#339AF0] ' : ''}`
          }

        >
          {components.length > 0 && (<ActionIcon
            size="xs"
            variant="subtle"
            color="white"

            onClick={toggleOpen}
          >
            {open ? (
              <IconChevronDown size="0.8rem" />
            ) : (
              <IconChevronRight size="0.8rem" />
            )}
          </ActionIcon>)}
          {icon && (
            <span className="pr-1" dangerouslySetInnerHTML={{ __html: icon }} />
          )}
          {isEditingLayerName ?
            <TextInput size="xs" value={layerName} onChange={(event) => setLayerName(event.currentTarget.value)}
                       rightSection={<ActionIcon
                         size="xs"
                         onClick={changeLayerName}
                       >
                         <IconCheck size="0.8rem" />
                       </ActionIcon>} /> : <p
              className="flex-grow truncate text-[10px] font-medium"
              style={itemStyle}
            >
              {name}
            </p>}
          {symbolMainInfo.isSymbol && symbolMainInfo.isMain && symbolMainInfo.isRoot && <Tooltip label="Main Symbol">
            <IconBox className="text-fuchsia-600 cursor-pointer" size="0.8rem" />
          </Tooltip>}
          {symbolMainInfo.isSymbol && symbolMainInfo.isInstance && symbolMainInfo.isRoot &&
            <Tooltip color="dark" label={`Instance of ${symbolMainInfo.main?.getName()} component`}>
              <IconBox className="text-fuchsia-500 drop-shadow-lg cursor-pointer" size="0.8rem" />
            </Tooltip>}
          <Menu position="bottom-start" trigger="hover" openDelay={100} closeDelay={400} shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon
                size="xs"
                autoContrast
                variant="subtle"
                color="white"
              >
                <IconDotsVertical size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item rightSection={<ThemeIcon variant="subtle" color={locked ? 'red' : 'white'}><IconEdit
                size="1rem" /></ThemeIcon>} onClick={() => setIsEditingLayerName(true)}>
                Edit Layer Name
              </Menu.Item>
              <Menu.Item rightSection={<ThemeIcon variant="subtle" color={locked ? 'red' : 'white'}><IconLock
                size="1rem" /></ThemeIcon>} onClick={lockLayer}>
                {locked ? 'Unlock Layer' : 'Lock Layer'}
              </Menu.Item>

              <Menu.Item onClick={toggleVisibility}
                         rightSection={<ThemeIcon variant="subtle" color={visible ? 'red' : 'white'}><IconEye
                           size="1rem" /></ThemeIcon>}>
                {visible ? 'Hide' : 'Unhide'}
              </Menu.Item>
              <Menu.Item onClick={() => editor.runCommand('wrapper')}
                         rightSection={<ThemeIcon variant="subtle" color="white"><IconBox size="1rem" /></ThemeIcon>}>
                Add Wrapper
              </Menu.Item>
              <Menu.Item onClick={handleDetachSymbol}
                         rightSection={<ThemeIcon variant="subtle" color="white"><IconBox size="1rem" /></ThemeIcon>}>
                Detach Component
              </Menu.Item>
              {/*<Menu.Item*/}
              {/*>*/}
              {/*  Save as Custom Block*/}
              {/*</Menu.Item>*/}
              <Menu.Divider />
              <Menu.Item
                color="red" rightSection={<ThemeIcon variant="subtle" color={visible ? 'red' : 'white'}><IconTrash
                size="1rem" /></ThemeIcon>}
                // onClick={}
              >
                Remove layer
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

        </div>
      </div>
      {!!(open && components.length) && (
        <div className={`'max-w-full ' ${!open && 'hidden'}`}>
          {cmpToRender}
        </div>
      )}
    </div>
  );
}
