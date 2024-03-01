import * as React from 'react';

import type {Asset} from 'grapesjs';
import {BTN_CLS} from './common';
import {useEditor} from '@/components/editor/context/EditorInstance'
import {IconX} from '@tabler/icons-react'
import {AssetsResultProps} from "@/components/editor/wrappers";
import {Modal, ScrollArea} from "@mantine/core";

// export type CustomAssetManagerProps = Pick<
//     AssetsResultProps,
//     'assets' | 'close' | 'select',
// >;

export default function CustomAssetManager({
                                               assets,
                                               select,
                                               open,
                                               close
                                           }) {
    const editor = useEditor();

    const remove = (asset: Asset) => {
        editor.Assets.remove(asset);
    };


    return (
        <Modal component={ScrollArea} size="xl" opened={open} onClose={close} title="Authentication" centered
               className="grid grid-cols-3 gap-2 pr-2"
        >
            {assets.map((asset) => (
                <div
                    key={asset.getSrc()}
                    className="relative group rounded overflow-hidden"
                >
                    <img className="display-block" src={asset.getSrc()}/>
                    <div
                        className="flex flex-col items-center justify-end absolute top-0 left-0 w-full h-full p-5 bg-zinc-700/75 group-hover:opacity-100 opacity-0 transition-opacity">
                        <button
                            type="button"
                            className={BTN_CLS}
                            onClick={() => select(asset, true)}
                        >
                            Select
                        </button>
                        <button
                            type="button"
                            className="absolute top-2 right-2"
                            onClick={() => remove(asset)}
                        >
                            <IconX size="1rem"/>
                        </button>
                    </div>
                </div>
            ))}
        </Modal>
    );
}
