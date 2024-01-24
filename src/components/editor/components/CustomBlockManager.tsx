import * as React from 'react'

import {
    Accordion,
    AppShell, Box,
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
        <>
            <Select
               ml="4"
                placeholder="Blocks"

                value={value}
                data={[
                    {
                        group: 'Default',
                        items: [
                            { value: 'defaultblocks', label: 'Blocks' },
                            { value: 'defaultintegrations', label: 'Integrations' },
                            {
                                value: 'defaultsections',
                                label: 'Sections',
                            },
                        ],
                    },
                    {
                        group: 'Custom',
                        items: [
                            { value: 'customblocks', label: 'Blocks' },
                            { value: 'customintegrations', label: 'Integrations' },
                            {
                                value: 'customsections',
                                label: 'Sections',
                            },
                        ],
                    },
                ]}
            />

            <div>
                {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
                    <div
                        key={category}
                        // className="h-[10%]"
                    >
                        <div className="flex items-center gap-2 ">
                            <Divider
                                className="w-full"
                                my="md"
                                size="sm"
                            />
                            <Text style={{ whiteSpace: 'nowrap', fontWeight: '600' }} c="blue.5">{category}</Text>
                            <Divider
                                className="w-full"
                                my="md"
                                size="sm"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            {blocks.map((block) => (
                                <div
                                    key={block.getId()}
                                    draggable
                                    className="flex h-10 w-full cursor-pointer items-center gap-2 rounded   py-1 font-semibold hover:bg-blue-500"
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
                                        className="w-full px-4 text-start text-sm"
                                        title={block.getLabel()}
                                    >
                                        {block.getLabel()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}
