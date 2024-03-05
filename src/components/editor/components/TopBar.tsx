import {ActionIcon, Button, Group, Loader, Tooltip, useComputedColorScheme, useMantineColorScheme} from '@mantine/core';
import TopBarButtons from './TopBarButtons';
import {
    IconArrowLeft,
    IconArrowsHorizontal, IconCheck,
    IconDeviceDesktop,
    IconDeviceFloppy,
    IconDeviceLaptop,
    IconDeviceMobile,
    IconDeviceTablet,
    IconExternalLink, IconFaceIdError,
    IconMoon,
    IconSun,
} from '@tabler/icons-react';

import {DevicesProvider, useEditor, useEditorMaybe, WithEditor} from '@/components/editor/wrappers';
import React, {useState} from 'react';
import Link from 'next/link';
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "@/lib/axios";
import {notifications} from "@mantine/notifications";
import Loading from "@/app/(app)/Loading";
import ErrorMessage from "@/app/(app)/Error";
import {useParams} from "next/navigation";
import {EditorData} from "@/app/editor/[slug]/page";
import useEditorData from "@/hooks/useEditorData";


function SaveButton() {
    const [showSuccess, setShowSuccess] = useState(false);
    const params = useParams()
    const siteSlug = params.slug

    const editor = useEditorMaybe()

    const data = editor?.getProjectData();
    // console.log("data",data)

    const {data: projectData} = useEditorData();

    const {mutate, isError, isPending} = useMutation({
            mutationFn: async (data) => {
                const endpoint = `api/v1/sites/editor/${siteSlug}/`;
                const url = projectData ? `${endpoint}update` : `${endpoint}store`; // Adjust 'update' and 'store' as per your API endpoints
                const method = projectData ? 'patch' : 'post';

                // Perform the request with the appropriate method and URL
                await axios({
                    method: method,
                    url: url,
                    data: {projectId: siteSlug, data: data}, // Assuming you want to send the same data for both requests
                });
            },
            onError:
                () => {
                    notifications.show({
                        title: 'Error',
                        message: 'Something went wrong... Please try again!',
                        color: 'red',
                    })

                },
            onSuccess: () => {
                // On success, show the check icon
                setShowSuccess(true);
                // And hide it after 2 seconds
                setTimeout(() => setShowSuccess(false), 2000);
            },
        },
    )
    // Determine the color based on the mutation's state
    const color = isError ? 'red' : showSuccess ? 'green' : 'blue';
    console.log(isError)
    return <Tooltip label="Save changes">
        {/*<CreateUserAndPageModal />*/}
        <ActionIcon loading={isPending} className={!showSuccess ? "animate-pulse" : ''}
                    color={color}
                    onClick={() => mutate()}
                    variant="subtle">
            {isError && <IconFaceIdError size="1rem"/>}
            {!isPending && !isError && showSuccess ? <IconCheck size="1rem"/> : <IconDeviceFloppy size="1rem"/>}
        </ActionIcon>

    </Tooltip>;
}

function PublishButton() {
    const [showSuccess, setShowSuccess] = useState(false);
    const params = useParams()
    const siteSlug = params.slug

    const editor = useEditorMaybe()

    const data = editor?.getProjectData();

    const pagesData = editor?.Pages.getAll().map(page => {
        const component = page.getMainComponent();
        const slug = page.getName();
        return {
            slug: slug,
            html: editor.getHtml({component}),
            css: editor.getCss({component})
        }
    });

    // console.log("pageData",pagesData)

    const {mutate, isPending} = useMutation({
            mutationFn:
                async () => await axios.post(`api/v1/sites/${siteSlug}/publish`, {projectId: siteSlug, data, pagesData}),
            onError:
                () => {
                    notifications.show({
                        title: 'Error',
                        message: 'Something went wrong... Please try again!',
                        color: 'red',
                    })

                },
            onSuccess: () => {
                // On success, show the check icon
                setShowSuccess(true);
                // And hide it after 2 seconds
                setTimeout(() => setShowSuccess(false), 2000);
            },
        },
    )

    return <Tooltip label="Publish Site"><Button loading={isPending} size="xs" onClick={() => mutate()}>Publish</Button></Tooltip>;
}

export default function Topbar() {


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


    return (
        <div className="gjs-top-sidebar flex h-full w-full items-center justify-between px-2">
            <div className="flex w-full items-center justify-start gap-2 py-2 ">
                <Button
                    component={Link}
                    href="/"
                    variant="subtle"
                    size="xs"
                    leftSection={<IconArrowLeft size="1rem"/>}
                >
                    Dashboard
                </Button>

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
            </div>
            <div className="flex items-center gap-4">
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
                    <TopBarButtons/>
                </WithEditor>
            </div>

            <div className="flex w-full items-center justify-end gap-4">

                <Button size="xs" variant="subtle" leftSection={<IconExternalLink size="1rem"/>}>Preview</Button>
                <SaveButton/>
                <PublishButton/>
            </div>
        </div>
    )
}
