import * as React from 'react';
import { useState } from 'react';

import { Button, Divider, Text, Tooltip } from '@mantine/core';
import { BlocksResultProps } from '@/components/editor/wrappers';
import useUser from '@/hooks/use-user';
import { IconExclamationCircle } from '@tabler/icons-react';


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

  return (
    <div className="w-full ">
      {Array.from(mapCategoryBlocks)
        .filter(([category, _]) => !category.startsWith('sections-')) // Filter out categories starting with "section-"
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
              {blocks.map((block) => {
                const isCustomCodeBlock = block.getLabel() === 'Custom Code';
                const isFreePlan = user?.subscription === 'free';
                const disabled = isFreePlan && isCustomCodeBlock;

                return (
                  <Tooltip
                    label={isCustomCodeBlock && isFreePlan ? 'Get a subscription to use Custom Code' : ''}
                    disabled={!disabled}
                    key={block.getId()}
                  >
                    <div>
                      <Button variant="subtle"
                              style={{ paddingLeft: '4px' }}
                              draggable={!disabled}
                              justify="start" fullWidth
                              onDragStart={(ev) => !disabled ? dragStart(block, ev.nativeEvent) : ev.preventDefault()}
                              onDragEnd={() => dragStop(false)}
                              disabled={disabled}
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
                        {(block.getLabel() === 'Material Icons' || block.getLabel() === 'Image') &&
                          <Tooltip label="Double click to open the picker">
                            <IconExclamationCircle size="1rem" />
                          </Tooltip>
                        }
                        {block.getLabel() === 'SVG'  &&
                          <Tooltip label="You can edit your SVG content in the settings tab">
                            <IconExclamationCircle size="1rem" />
                          </Tooltip>
                        }
                        {block.getLabel() === 'Heading'  &&
                          <Tooltip label="You can edit the type of heading in the settings">
                            <IconExclamationCircle size="1rem" />
                          </Tooltip>
                        }
                      </Button>
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
