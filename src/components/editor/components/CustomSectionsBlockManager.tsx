import * as React from 'react'
import {useState} from 'react'

import { Button, Divider, Text, Tooltip } from '@mantine/core';
import {BlocksResultProps} from '@/components/editor/wrappers'
import { IconBulb } from '@tabler/icons-react';


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
          <Tooltip arrowOffset={10} color="dark" w={400} multiline arrowSize={4}
                   label="Blocks with interactive elements can be only be interacted with preview mode, e.g. pricing with switch can be switched on/off with preview mode and the values changed."
                   withArrow  position="top">
            <Button leftSection={<IconBulb size="1rem"/>} size="xs" fullWidth>Tips</Button>
          </Tooltip>
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
                                <Button variant="subtle" size="xs"
                                        style={{paddingLeft:'4px'}}
                                        key={block.getId()}
                                        draggable
                                        justify="start" fullWidth
                                        onDragStart={(ev) =>
                                            dragStart(block, ev.nativeEvent)
                                        }
                                        onDragEnd={() => dragStop(false)}
                                >
                                    {/*<div*/}
                                    {/*    className="flex h-4 w-4 items-center justify-center "*/}
                                    {/*    dangerouslySetInnerHTML={{*/}
                                    {/*        __html: block.getMedia()!,*/}
                                    {/*    }}*/}
                                    {/*/>*/}
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
    )
}
