import {ActionIcon, Button, Tooltip} from '@mantine/core';
import TopBarButtons from './TopBarButtons';
import {
    IconArrowLeft,
    IconArrowsHorizontal,
    IconCheck,
    IconDeviceDesktop,
    IconDeviceFloppy,
    IconDeviceLaptop,
    IconDeviceMobile,
    IconDeviceTablet,
    IconExternalLink,
    IconFaceIdError,
} from '@tabler/icons-react';

import {DevicesProvider, useEditorMaybe, WithEditor} from '@/components/editor/wrappers';
import React, {useState} from 'react';
import Link from 'next/link';
import {useMutation} from "@tanstack/react-query";
import axios from "@/lib/axios";
import {notifications} from "@mantine/notifications";
import {useParams} from "next/navigation";
import useEditorData from "@/hooks/use-editor-data";



// export default function Topbar() {
//
//     return (
//
//     )
// }

{/*<Group justify="center">*/}
{/*    <ActionIcon*/}
{/*        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}*/}
{/*        variant="subtle"*/}
{/*        color={computedColorScheme === 'light' ?  'blue' :'yellow'}*/}
{/*        size="md"*/}
{/*        aria-label="Toggle color scheme"*/}
{/*    >*/}
{/*        {computedColorScheme === 'light' ? <IconMoon size="1rem"  /> : <IconSun  size="1rem" />}*/}
{/*    </ActionIcon>*/}
{/*</Group>*/}