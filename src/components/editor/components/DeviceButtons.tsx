import { DevicesProvider } from '@/components/editor/wrappers';
import { ActionIcon, Tooltip } from '@mantine/core';
import React from 'react';
import {
  IconArrowsHorizontal,
  IconDeviceDesktop,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
} from '@tabler/icons-react';

const getDeviceIcon = (device: string) => {
  if (device === 'desktop') {
    return <IconDeviceDesktop size="1rem" />;
  } else if (device === 'laptop') {
    return <IconDeviceLaptop size="1rem" />;
  } else if (device === 'tablet') {
    return <IconDeviceTablet size="1rem" />;
  } else if (device === 'mobile') {
    return <IconDeviceMobile size="1rem" />;
  } else if (device === 'fit') {
    return <IconArrowsHorizontal size="1rem" />;
  }
  return null; // Fallback
};

const DeviceButtons = () => {



  return (
    <>
      {/*<Tooltip*/}
      {/*  color="dark"*/}
      {/*  w={300}*/}
      {/*  multiline*/}
      {/*  label={<div className="flex gap-2 flex-col"><p>We recommend you build your website with desktop view not fit to*/}
      {/*    screen if you have a smaller editing device as desktop best represents the final product.</p>*/}
      {/*  </div>}>*/}
      {/*  <ActionIcon*/}
      {/*    variant="light"*/}
      {/*  >*/}
      {/*    <IconExclamationMark size="1rem" />*/}
      {/*  </ActionIcon>*/}
      {/*</Tooltip>*/}
      <DevicesProvider>
        {({ selected, select, devices }) => (
          <div className="flex items-center gap-2">
            {devices.map((device) => {
              const isSelected = device.id === selected;
              return (
                <Tooltip
                  color="dark"
                  key={device.id}
                  label={`${device.getName()} up to ${device.get('id') === 'desktop' ? '1536px': device.getWidthMedia()}`}
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
              );
            })}
          </div>

        )}
      </DevicesProvider>

    </>
  );
};

export default DeviceButtons;