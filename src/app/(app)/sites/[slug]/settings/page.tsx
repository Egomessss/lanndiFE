'use client'
import React, { useState } from 'react'
import { Button, Divider, FileInput, Tabs, TextInput } from '@mantine/core'
import Link from 'next/link'
import { langs } from '@uiw/codemirror-extensions-langs'
import CodeMirror from '@uiw/react-codemirror'
import { useForm } from '@mantine/form'
import { IconFile } from '@tabler/icons-react'
import GeneralSiteSettingsForm from '@/app/editor/[slug]/_components/GeneralSiteSettingsForm'

const Page = () => {

    return (
        <div>
            <Tabs defaultValue="first">
                <Tabs.List>
                    <Tabs.Tab value="first">General</Tabs.Tab>
                    <Tabs.Tab value="second">Domain</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="first">
                <GeneralSiteSettingsForm/>
                </Tabs.Panel>
                <Tabs.Panel value="second">
                    <div className="w-full flex flex-col gap-4 my-10">

                        <div className="flex items-start gap-2 flex-col w-full">
                            <div className="flex justify-between w-full"><h2>Domain</h2>
                            </div>
                            <div
                                className="w-full h-52 border border-solid rounded-lg flex flex-col gap-4 justify-center items-center">
                                <p>This site doesn&apos;t have any connect domains yet</p>
                                <Button>Connect your domain</Button>
                            </div>
                        </div>


                        <div className="flex justify-between ">
                            <div className="flex items-start gap-2 flex-col justify-start">
                                <h2>Subdomain</h2>
                                <p>lanndi</p></div>
                        </div>
                    </div>
                </Tabs.Panel>

            </Tabs>

        </div>
    )
}

export default Page