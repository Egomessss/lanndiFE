import {
    ActionIcon,
    Button,
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
    IconMoonStars,
    IconSettings,
    IconSun,
    IconX,
} from '@tabler/icons-react'

import { DevicesProvider, WithEditor } from '@/components/editor/wrappers'
import React from 'react'
import { useEditorInstance } from '@/components/editor/context/EditorInstance'


export default function Topbar({ openBlockSideBar, onClick }:any) {


    const getDeviceIcon = (device:string) => {
        if (device === 'desktop') {
            return <IconDeviceDesktop size="1rem" />
        } else if (device === 'laptop') {
            return <IconDeviceLaptop size="1rem" />
        } else if (device === 'tablet') {
            return <IconDeviceTablet  size="1rem"/>
        } else if (device === 'mobile') {
            return <IconDeviceMobile  size="1rem"/>
        }else if (device === 'fit') {
            return <IconArrowsHorizontal  size="1rem"/>
        }
        return null // Fallback
    }

    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light', {
        getInitialValueInEffect: true,
    })
    const theme = useMantineTheme()

    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    )

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    )

    const handleDeviceSelection = (device, selectFn) => {
        selectFn(device.id);
    };



    return (
        <div className="gjs-top-sidebar flex h-full w-full items-center justify-between px-2">
            <div className="flex w-full items-center justify-start gap-2 py-2 ">
                <Button
                    variant="outline"
                    size="xs"
                    leftSection={<IconArrowLeft />}
                >
                    Dashboard
                </Button>
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
                                            onClick={() =>  select(device.id)}
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

                <Switch
                    onClick={() =>
                        setColorScheme(
                            computedColorScheme === 'light' ? 'dark' : 'light',
                        )
                    }
                    size="md"
                    color="dark.4"
                    onLabel={moonIcon}
                    offLabel={sunIcon}
                />
                <Tooltip label="Save changes">

                    {/*<CreateUserAndPageModal />*/}

                    <ActionIcon variant="outline">
                        <IconDeviceFloppy size="1rem" />
                    </ActionIcon>

                </Tooltip>

                <Button  variant="outline" size="xs">Publish</Button>
            </div>
        </div>
    )
}
