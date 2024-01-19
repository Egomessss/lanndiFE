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


export default function Topbar({ openBlockSideBar, onClick }:any) {


    const getDeviceIcon = (deviceName) => {
        if (deviceName.toLowerCase().includes('desktop')) {
            return <IconDeviceDesktop />
        } else if (deviceName.toLowerCase().includes('laptop')) {
            return <IconDeviceLaptop />
        } else if (deviceName.toLowerCase().includes('tablet')) {
            return <IconDeviceTablet />
        } else if (deviceName.toLowerCase().includes('mobile')) {
            return <IconDeviceMobile />
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

    return (
        <div className="gjs-top-sidebar flex h-full w-full items-center justify-between px-4 ">
            <div className="flex w-full items-center justify-start gap-2 ">
                <Button
                    size="xs"
                    leftSection={<IconArrowLeft />}
                >
                    Posts
                </Button>
                {/*<TemplatesModal />*/}
                <Tooltip label="Open block manager">
                    <ActionIcon onClick={onClick}>
                        {openBlockSideBar ? <IconGrid4x4 /> : <IconX />}
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="Add custom code">
                    <ActionIcon variant="outline">
                        <IconCode />
                    </ActionIcon>
                </Tooltip>
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
                                            key={index}
                                            variant={
                                                isSelected ? 'filled' : 'subtle'
                                            }
                                            color="blue"
                                            onClick={() => select(device.id)}
                                        >
                                            {getDeviceIcon(device.getName())}
                                        </ActionIcon>
                                    </Tooltip>
                                )
                            })}
                        </div>
                    )}
                </DevicesProvider>
                <WithEditor>
                    <TopBarButtons />
                </WithEditor>
                <div className="flex items-center gap-2">
                    <Tooltip label="Preview">
                        <ActionIcon variant="outline">
                            <IconLink />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Preview link">
                        <ActionIcon variant="outline">
                            <IconExternalLink />
                        </ActionIcon>
                    </Tooltip>
                </div>
            </div>

            <div className="flex w-full items-center justify-end gap-2">
                <Tooltip label="Page settings">
                    <ActionIcon variant="outline">
                        {' '}
                        <IconSettings />
                    </ActionIcon>
                </Tooltip>
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
                        <IconDeviceFloppy />
                    </ActionIcon>

                </Tooltip>

                <Button size="xs">Publish</Button>
            </div>
        </div>
    )
}
