import React, { useState } from 'react';
import { ActionIcon, AppShell, Box, Divider, ScrollArea, Tooltip } from '@mantine/core';
import styles from '@/app/(editor)/editor/[slug]/page.module.css';
import { IconFile, IconLayoutGridAdd, IconSection, IconStack2 } from '@tabler/icons-react';
import SettingsModal from '@/components/editor/components/SettingsModal';
import BlockSideBar from '@/components/editor/components/BlockSideBar';
import LayersLeftSideBar from '@/components/editor/components/LayersLeftSideBar';
import PagesLeftSideBar from '@/components/editor/components/PagesLeftSideBar';
import { usePathname } from 'next/navigation';

function LeftSideBar() {
  const [selected, setSelected] = useState('Blocks');


  const icons = [
    { label: 'Blocks', Icon: IconLayoutGridAdd, selectedValue: 'Blocks' },
    { label: 'Sections', Icon: IconSection, selectedValue: 'Sections' },
    { label: 'Layers', Icon: IconStack2, selectedValue: 'Layers' },
    { label: 'Pages', Icon: IconFile, selectedValue: 'Pages' },
  ];

  const renderSelectedComponent = () => {
    switch (selected) {
      case 'Blocks':
        return <BlockSideBar type="Blocks" />;
      case 'Sections':
        return <BlockSideBar type="Sections" />;
      case 'Layers':
        return <LayersLeftSideBar />;
      case 'Pages':
        return <PagesLeftSideBar />;
      default:
        return null;
    }
  };

  return (
    <AppShell.Navbar>
      <div className="h-full flex">
        <div className="flex flex-col gap-2 h-full p-1">
          {icons.map(({ label, Icon, selectedValue }) => (
            <Tooltip key={label} label={label}>
              <ActionIcon onClick={() => setSelected(selectedValue)} variant="subtle">
                <Icon size="1rem" />
              </ActionIcon>
            </Tooltip>
          ))}
          {/*<Divider my="xs" variant="dashed" />*/}
          {/*<SettingsModal />*/}
        </div>
        <Divider orientation="vertical" my="xs" />
        <Box component={ScrollArea} className="p-2 w-full">{renderSelectedComponent()}</Box>
      </div>
    </AppShell.Navbar>
  );
}

export default LeftSideBar;