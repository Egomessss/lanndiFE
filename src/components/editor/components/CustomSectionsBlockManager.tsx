import * as React from 'react'
import {useState} from 'react'

import {Button, Divider, Text,} from '@mantine/core'
import {BlocksResultProps} from '@/components/editor/wrappers'


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
                                <Button variant="subtle"
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
