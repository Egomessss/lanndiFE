import * as React from 'react'

import {
    Accordion,
    AppShell, Box,
    Button,
    Divider,
    ScrollArea,
    Select,
    Tabs,
    Text,
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { BlocksResultProps } from '@/components/editor/wrappers'


export type CustomBlockManagerProps = Pick<
    BlocksResultProps,
    'mapCategoryBlocks' | 'dragStart' | 'dragStop'
>

export default function CustomBlockManager({
                                               mapCategoryBlocks,
                                               dragStart,
                                               dragStop,
                                           }: CustomBlockManagerProps) {
    const [value, setValue] = useState('Basic')
    // default-blocks-basic
    // default-block-interactive

    // default-sections-hero

    // custom-blocks-basic
    // custom-sections-basic
    // custom-templates-basic


    return (


            <div className="w-full">
                {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
                    <div
                        key={category}
                        // className="h-[10%]"
                    >
                        <div className="flex items-center gap-2 ">

                            <Text style={{ whiteSpace: 'nowrap', fontWeight: '600', fontSize:'0.8rem' }} c="blue.5">{category}</Text>
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
                                        style={{paddingLeft:'0px'}}
                                    key={block.getId()}
                                    draggable
                                        justify="space-between" fullWidth leftSection=''
                                    onDragStart={(ev) =>
                                        dragStart(block, ev.nativeEvent)
                                    }
                                    onDragEnd={() => dragStop(false)}
                                >
                                    {/*<div*/}
                                    {/*    className="flex h-10 w-10 items-center justify-center px-2"*/}
                                    {/*    dangerouslySetInnerHTML={{*/}
                                    {/*        __html: block.getMedia()!,*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                    <p
                                        className="w-full px-4 text-start text-xs"
                                        title={block.getLabel()}
                                    >
                                        {block.getLabel()}
                                    </p>
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


    )
}
