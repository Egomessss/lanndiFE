import React, { useState } from 'react';
import { ActionIcon, AppShell, Box, Divider, ScrollArea, Tooltip } from '@mantine/core';
import {
  IconBox,
  IconFile,
  IconLayoutGridAdd,
  IconPhoto,
  IconSection,
  IconStack2,
  IconTemplate,
} from '@tabler/icons-react';
import BlockSideBar from '@/components/editor/components/BlockSideBar';
import LayersLeftSideBar from '@/components/editor/components/LayersLeftSideBar';
import PagesLeftSideBar from '@/components/editor/components/PagesLeftSideBar';
import CustomComponentsBlockManager from '@/components/editor/components/CustomComponentsBlockManager';
import useUser from '@/hooks/use-user';
import { useEditor } from '../context/EditorInstance';


function LeftSideBar() {
  const editor = useEditor();
  const { user } = useUser();

  const [selected, setSelected] = useState('Blocks');

  const icons = [
    { label: 'Blocks', Icon: IconLayoutGridAdd, selectedValue: 'Blocks', show: true },
    { label: 'Components', Icon: IconBox, selectedValue: 'Components', show: true },
    { label: 'Sections', Icon: IconSection, selectedValue: 'Sections', show: true },
    { label: 'Templates', Icon: IconTemplate, selectedValue: 'Templates', show: true },
    { label: 'Layers', Icon: IconStack2, selectedValue: 'Layers', show: true },
    {
      label: 'Pages', Icon: IconFile, selectedValue: 'Pages', show:
        !(user?.subscription === 'free' || user?.subscription === 'basic-monthly' || user?.subscription === 'basic-yearly'),
    },
    // {
    //   label: 'Base Styles', Icon: IconBrush, selectedValue: 'Styles', show:
    //     !(user?.subscription === 'free' || user?.subscription === 'basic-monthly' || user?.subscription === 'basic-yearly'),
    // },

  ];

  const renderSelectedComponent = () => {
    switch (selected) {
      case 'Blocks':
        return <BlockSideBar type="Blocks" />;
      case 'Sections':
        return <BlockSideBar type="Sections" />;
      case 'Templates':
        return <BlockSideBar type="Templates" />;
      case 'Layers':
        return <LayersLeftSideBar />;
      case 'Pages':
        return <PagesLeftSideBar />;
      case 'Components':
        return <CustomComponentsBlockManager />;
      // case 'Styles':
      //   return <CustomBaseStyleManager />;
      default:
        return null;
    }
  };
  console.log(user && user.isAdmin);
  return (
    <AppShell.Navbar>
      <div className="h-full flex">

        <div className="flex flex-col gap-2 h-full p-1">
          {icons.filter(icon => icon.show === true).map(({ label, Icon, selectedValue }) => (
            <div key={label}>
              <Tooltip color="dark" key={label} label={label}>
                <ActionIcon onClick={() => setSelected(selectedValue)} variant="subtle">
                  <Icon size="1rem" />
                </ActionIcon>
              </Tooltip>
              {label === 'Components' && <Divider orientation="horizontal" my="xs" />}
              {label === 'Templates' && <Divider orientation="horizontal" my="xs" />}
            </div>
          ))}
          {/*<Divider my="xs" variant="dashed" />*/}
          {/*<SettingsModal />*/}
          <Divider orientation="horizontal" my="xs" />
          <Tooltip label="Assets Manager">
            <ActionIcon onClick={() => editor.Assets.open()} variant="subtle">
              <IconPhoto size="1rem" />
            </ActionIcon>
          </Tooltip>
          {/*<Tooltip label="Fonts Manager">*/}
          {/*  <ActionIcon onClick={() => editor.Assets.open()} variant="subtle">*/}
          {/*    <IconFileTypography size="1rem" />*/}
          {/*  </ActionIcon>*/}
          {/*</Tooltip>*/}
          {/*<Tooltip label="Base Styles Manager">*/}
          {/*  <ActionIcon onClick={() => editor.Assets.open()} variant="subtle">*/}
          {/*    <IconFileTypography size="1rem" />*/}
          {/*  </ActionIcon>*/}
          {/*</Tooltip>*/}
        </div>
        <Divider orientation="vertical" my="xs" />
        <Box component={ScrollArea} scrollbars="y" className="p-1 w-full overflow">{renderSelectedComponent()}</Box>
      </div>
    </AppShell.Navbar>
  );
}

export default LeftSideBar;