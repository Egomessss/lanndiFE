import { AppShell } from '@mantine/core';
import CustomPageManager from './CustomPageManager';
import { PagesProvider } from '../wrappers';
import React from 'react';

export default function PagesLeftSideBar() {
    return (
        <AppShell.Section>
            <PagesProvider>
                {(props) => <CustomPageManager {...props} />}
            </PagesProvider>
        </AppShell.Section>
    )
}
