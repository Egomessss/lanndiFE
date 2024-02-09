import {
    ActionIcon,
    Button,
    Group,
    rem,
    Switch,
    Tooltip,
    useComputedColorScheme,
    useMantineColorScheme,
    useMantineTheme,
} from '@mantine/core'
import TopBarButtons from './TopBarButtons'
import {
    IconArrowLeft,
    IconArrowsHorizontal,
    IconCode,
    IconDeviceDesktop,
    IconDeviceFloppy,
    IconDeviceLaptop,
    IconDeviceMobile,
    IconDeviceTablet,
    IconExternalLink,
    IconGrid4x4,
    IconLink,
    IconMoon,
    IconMoonStars, IconScanEye,
    IconSettings,
    IconSun,
    IconX,
} from '@tabler/icons-react'

import { DevicesProvider, WithEditor } from '@/components/editor/wrappers'
import React from 'react'
import { useEditorInstance } from '@/components/editor/context/EditorInstance'
import Link from 'next/link'


export default function Topbar({ openBlockSideBar, onClick }: any) {


    const getDeviceIcon = (device: string) => {
        if (device === 'desktop') {
            return <IconDeviceDesktop size="1rem" />
        } else if (device === 'laptop') {
            return <IconDeviceLaptop size="1rem" />
        } else if (device === 'tablet') {
            return <IconDeviceTablet size="1rem" />
        } else if (device === 'mobile') {
            return <IconDeviceMobile size="1rem" />
        } else if (device === 'fit') {
            return <IconArrowsHorizontal size="1rem" />
        }
        return null // Fallback
    }

    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light', {
        getInitialValueInEffect: true,
    })
    const theme = useMantineTheme()




    return (
        <div className="gjs-top-sidebar flex h-full w-full items-center justify-between px-2">
            <div className="flex w-full items-center justify-start gap-2 py-2 ">
                <Button
                    component={Link}
                    href="/sites"
                    variant="subtle"
                    size="xs"
                    leftSection={<IconArrowLeft />}
                >
                    Dashboard
                </Button>

                <Group justify="center">
                    <ActionIcon
                        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                        variant="subtle"
                        color={computedColorScheme === 'light' ?  'blue' :'yellow'}
                        size="md"
                        aria-label="Toggle color scheme"
                    >
                        {computedColorScheme === 'light' ? <IconMoon size="1rem"  /> : <IconSun  size="1rem" />}
                    </ActionIcon>
                </Group>
            </div>
            <div className="flex items-center gap-4">
                <DevicesProvider>
                    {({ selected, select, devices }) => (
                        <div className="flex items-center gap-2">
                            {devices.map((device, index) => {
                                const isSelected = device.id === selected
                                return (
                                    <Tooltip
                                        key={device.id}
                                        label={`${device.getName()} - ${device.getWidthMedia()}`}
                                    >
                                        <ActionIcon
                                            key={device.id}
                                            variant={
                                                isSelected ? 'filled' : 'subtle'
                                            }
                                            color="blue"
                                            onClick={() => select(device.id)}
                                        >
                                            {getDeviceIcon(device.id)}
                                        </ActionIcon>
                                    </Tooltip>
                                )
                            })}
                        </div>
                    )}
                </DevicesProvider>
                <WithEditor>
                    <TopBarButtons onClick={onClick} />
                </WithEditor>
            </div>

            <div className="flex w-full items-center justify-end gap-4">

                <Button size="xs" variant="subtle" leftSection={<IconExternalLink size="1rem" />}>Preview</Button>
                <Tooltip label="Save changes">

                    {/*<CreateUserAndPageModal />*/}

                    <ActionIcon variant="subtle">
                        <IconDeviceFloppy size="1rem" />
                    </ActionIcon>

                </Tooltip>

                <Button  size="xs">Publish</Button>
            </div>
        </div>
    )
}
