import * as React from 'react';
import { useState } from 'react';

import { ActionIcon, Button, Divider, Menu, Popover, Text, Tooltip } from '@mantine/core';
import { BlocksResultProps, useEditor } from '@/components/editor/wrappers';
import useUser from '@/hooks/use-user';
import { IconBulb, IconExclamationCircle, IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';


export type CustomBlockManagerProps = Pick<
  BlocksResultProps,
  'mapCategoryBlocks' | 'dragStart' | 'dragStop'
>

export default function CustomBlockManager({
                                             mapCategoryBlocks,
                                             dragStart,
                                             dragStop,
                                           }: CustomBlockManagerProps) {
  const { user } = useUser();

  const editor = useEditor();
  // console.log(mapCategoryBlocks);
  const onClick = (id: string) => {
    const block = editor.Blocks.get(id);
    const selectedComponent = editor.getSelected() as any; // Replace 'any' with the correct type if known
    const component = block?.getContent();

    if (selectedComponent) {
      const appendedBlock = selectedComponent.append(component)[0];
      if (appendedBlock) {
        editor.select(appendedBlock);
      }
    }
  };

  // console.log(editor.Css.getAll());


  return (
    <div className="w-full ">
      <Tooltip arrowOffset={10} color="dark" w={400} multiline arrowSize={4}
               label={<div className="flex flex-col gap-2"><p>1. Click and drag a block to display it on the canvas</p>
                 <p>2. Select a canvas block and click to append the block inside of it.</p>
                 <p>Blocks with interactive elements can be only be interacted with preview mode, e.g. pricing with
                   switch can be switched on/off with preview mode and the values changed.</p></div>}
               withArrow position="top">
        <Button variant="subtle" leftSection={<IconBulb size="1rem" />} size="xs" fullWidth>Tips</Button>
      </Tooltip>
      {Array.from(mapCategoryBlocks)
        .filter(([category, _]) => !category.startsWith('sections-') && !category.startsWith('templates-'))
        .map(([category, blocks]) => (
          <div
            key={category}
          >
            <div className="flex items-center gap-2 ">
              <Text style={{ whiteSpace: 'nowrap', fontWeight: '600', fontSize: '0.8rem' }} c="blue.5">{category}</Text>
              <Divider
                variant="dashed"
                className="w-full"
                my="md"
                size="xs"
              />
            </div>

            <div className="flex flex-col gap-2">
              {blocks
                .filter((block) => !['heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six'].includes(block.getId()))
                .map((block) => {
                  const isCustomCodeBlock = block.getLabel() === 'Custom Code';
                  const isFreePlan = user?.subscription === 'free';
                  const disabled = isFreePlan && isCustomCodeBlock;
                  return (
                    <Tooltip
                      label={isCustomCodeBlock && isFreePlan ? 'Get a subscription to use Custom Code' : ''}
                      disabled={!disabled}
                      key={block.getId()}
                    >
                      <div className="flex w-full justify-between items-center">
                        <Button variant="subtle" size="xs"
                                draggable={!disabled}
                                justify="between"
                                fullWidth
                                style={{ paddingLeft: '4px' }}
                                onClick={() => onClick(block.getId())}
                                onDragStart={(ev) => !disabled ? dragStart(block, ev.nativeEvent) : ev.preventDefault()}
                                onDragEnd={() => dragStop(false)}
                                disabled={disabled}
                                rightSection={
                                  <>
                                    {(block.getLabel() === 'Material Icons' || block.getLabel() === 'Image') &&
                                      <Tooltip label="Double click to open the picker">
                                        <IconExclamationCircle size="0.8rem" />
                                      </Tooltip>
                                    }
                                    {block.getLabel() === 'SVG' &&
                                      <Tooltip label="You can edit your SVG content in the settings tab">
                                        <IconExclamationCircle size="0.8rem" />
                                      </Tooltip>
                                    }
                                    {block.getLabel() === 'List Item' &&
                                      <Tooltip label="Can only be dragged inside Ordered and Unordered lists">
                                        <IconExclamationCircle size="0.8rem" />
                                      </Tooltip>
                                    }
                                  </>
                                }
                        >
                          <div
                            className="flex h-4 w-4 items-center justify-center"
                            dangerouslySetInnerHTML={{
                              __html: block.getMedia()!,
                            }}
                          />
                          <p className={'w-full px-2 text-start text-xs' + (disabled ? ' text-gray-400' : '')}>
                            {block.getLabel()}
                          </p>
                        </Button>
                        {block.getLabel() === 'Heading' && (
                          <Menu zIndex={500} trigger="hover" openDelay={100} closeDelay={400}>
                            <Menu.Target>
                              <ActionIcon mr={10} variant="subtle">
                                <IconPlus size="1rem" />
                              </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                              <div className="flex flex-col gap-2">
                                {blocks
                                  .filter((heading) => ['heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six'].includes(heading.getId()))
                                  .map((heading) => (
                                    <Button
                                      key={heading.getId()}
                                      variant="subtle"
                                      size="xs"
                                      draggable={!disabled}
                                      justify="start"
                                      fullWidth
                                      onClick={() => onClick(heading.getId())}
                                      onDragStart={(ev) => !disabled ? dragStart(heading, ev.nativeEvent) : ev.preventDefault()}
                                      onDragEnd={() => dragStop(false)}
                                      disabled={disabled}
                                    >
                                      {heading.getLabel()}
                                    </Button>
                                  ))}
                              </div>
                            </Menu.Dropdown>
                          </Menu>
                        )}
                      </div>

                    </Tooltip>
                  );
                })}
            </div>
          </div>
        ))
      }
    </div>
  );
}
