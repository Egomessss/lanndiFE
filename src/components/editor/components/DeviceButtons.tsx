import {DevicesProvider} from "@/components/editor/wrappers";
import {ActionIcon, Tooltip} from "@mantine/core";
import React from "react";
import {
    IconArrowsHorizontal,
    IconDeviceDesktop,
    IconDeviceLaptop,
    IconDeviceMobile,
    IconDeviceTablet
} from "@tabler/icons-react";

const getDeviceIcon = (device: string) => {
    if (device === 'desktop') {
        return <IconDeviceDesktop size="1rem"/>
    } else if (device === 'laptop') {
        return <IconDeviceLaptop size="1rem"/>
    } else if (device === 'tablet') {
        return <IconDeviceTablet size="1rem"/>
    } else if (device === 'mobile') {
        return <IconDeviceMobile size="1rem"/>
    } else if (device === 'fit') {
        return <IconArrowsHorizontal size="1rem"/>
    }
    return null // Fallback
}

const DeviceButtons = () => {
    return (
        <>
            <DevicesProvider>
                {({selected, select, devices}) => (
                    <div className="flex items-center gap-2">
                        {devices.map((device) => {
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
                                        onClick={() => select(device.id as string)}
                                    >
                                        {getDeviceIcon(device.id as string)}
                                    </ActionIcon>
                                </Tooltip>
                            )
                        })}
                    </div>
                )}
            </DevicesProvider></>
    );
};

export default DeviceButtons;