import * as React from 'react';
import { useState } from 'react';

import { ActionIcon, Button, Divider, Text, Tooltip } from '@mantine/core';
import { BlocksResultProps } from '@/components/editor/wrappers';
import { IconBulb, IconPhoto } from '@tabler/icons-react';


export type CustomBlockManagerProps = Pick<
  BlocksResultProps,
  'mapCategoryBlocks' | 'dragStart' | 'dragStop'
>

export default function CustomSectionsBlockManager({
                                                     mapCategoryBlocks,
                                                     dragStart,
                                                     dragStop,
                                                   }: CustomBlockManagerProps) {


  return (
    <div className="w-full">
      {Array.from(mapCategoryBlocks)
        .filter(([category, _]) => category.startsWith('sections-')) // Filter out categories starting with "section-"
        .map(([category, blocks]) => (
          <div
            key={category}
          >
            <div className="flex items-center gap-2 ">
              <Text style={{ whiteSpace: 'nowrap', fontWeight: '600', fontSize: '0.8rem' }} c="blue.5">
                {category.replace('sections-', '').replace(/^\w/, c => c.toUpperCase())}
              </Text>
              <Divider
                variant="dashed"
                className="w-full"
                my="md"
                size="xs"
              />
            </div>

            <div className="flex flex-col gap-2">
              {blocks.map((block) => (
                <Button  key={block.getId()} variant="subtle" size="xs"
                        style={{ paddingLeft: '4px' }}
                        leftSection={<Tooltip openDelay={200} position="right-start" color="dark"
                                               label={<img src={block.getMedia()} alt={block.getLabel()}
                                                           className="object-cover aspect-video h-32 p-1" />}><ActionIcon size="sm"><IconPhoto
                          size="0.8rem" /></ActionIcon></Tooltip>}
                        draggable
                        justify="start" fullWidth
                        onDragStart={(ev) =>
                          dragStart(block, ev.nativeEvent)
                        }
                        onDragEnd={() => dragStop(false)}
                >
                  <p
                    className="w-full px-2 text-start text-xs"
                  >
                    {block.getLabel()}
                  </p>
                </Button>

              ))}
            </div>
          </div>
        ))
      }
    </div>
  );
}
