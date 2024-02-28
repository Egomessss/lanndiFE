import {ActionIcon, Button, Group, Tooltip, useComputedColorScheme, useMantineColorScheme} from '@mantine/core';
import TopBarButtons from './TopBarButtons';
import {
    IconArrowLeft,
    IconArrowsHorizontal,
    IconDeviceDesktop,
    IconDeviceFloppy,
    IconDeviceLaptop,
    IconDeviceMobile,
    IconDeviceTablet,
    IconExternalLink,
    IconMoon,
    IconSun,
} from '@tabler/icons-react';

import {DevicesProvider, useEditor, useEditorMaybe, WithEditor} from '@/components/editor/wrappers';
import React from 'react';
import Link from 'next/link';
import {useMutation} from "@tanstack/react-query";
import axios from "@/lib/axios";
import {notifications} from "@mantine/notifications";
import Loading from "@/app/(app)/Loading";
import ErrorMessage from "@/app/(app)/Error";
import {useParams} from "next/navigation";


function SaveButton() {

    const params = useParams()
    const siteSlug = params.slug

    const editor = useEditorMaybe()

    const data = editor?.getProjectData();
    console.log(data)

    const {mutate, isError, isPending} = useMutation({
            mutationFn:
                async () => await axios.post(`api/v1/sites/editor/${siteSlug}/store`, {projectId: siteSlug, data}),
            // onSuccess:
            //     (data) => {
            //         const responseData = data?.data // Assuming your data is nested under a 'data' key
            //         if (responseData) {
            //             notifications.show({
            //                 title: 'Success!',
            //                 message: responseData.message,
            //                 color: 'green',
            //             })
            //             console.log(`/editor/${responseData.slug}`)
            //         }
            //     }
            // ,
            onError:
                (error) => {
                    console.log('error', error)
                    // @ts-ignore
                    if (error.response.status === 422) {
                        // Handle Laravel validation errors
                        // @ts-ignore
                        form.setErrors(error.response.data.errors || {})
                    } else {
                        notifications.show({
                            title: 'Error',
                            message: 'Something went wrong... Please try again!',
                            color: 'red',
                        })
                    }
                },
        },
    )


    // if (isPending) return <Loading />
    // if (isError) return <ErrorMessage />

    return <Tooltip label="Save changes">

        {/*<CreateUserAndPageModal />*/}

        <ActionIcon onClick={() => mutate()} variant="subtle">
            <IconDeviceFloppy size="1rem"/>
        </ActionIcon>

    </Tooltip>;
}

export default function Topbar({openBlockSideBar, onClick}: any) {


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

    // const { setColorScheme } = useMantineColorScheme()
    // const computedColorScheme = useComputedColorScheme('light', {
    //     getInitialValueInEffect: true,
    // })


    return (
        <div className="gjs-top-sidebar flex h-full w-full items-center justify-between px-2">
            <div className="flex w-full items-center justify-start gap-2 py-2 ">
                <Button
                    component={Link}
                    href="/"
                    variant="subtle"
                    size="xs"
                    leftSection={<IconArrowLeft/>}
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
                    <TopBarButtons onClick={onClick}/>
                </WithEditor>
            </div>

            <div className="flex w-full items-center justify-end gap-4">

                <Button size="xs" variant="subtle" leftSection={<IconExternalLink size="1rem"/>}>Preview</Button>
                <SaveButton/>

                <Button size="xs">Publish</Button>
            </div>
        </div>
    )
}
