'use client'

import React from 'react'
import {Button, Tabs} from '@mantine/core'
import SiteSettingsForm from '@/app/editor/[slug]/_components/SiteSettingsForm'
import Loading from '@/app/(app)/Loading'
import ErrorMessage from '@/app/(app)/Error'
import {useQuery} from '@tanstack/react-query'
import axios from '@/lib/axios'
import {useParams} from 'next/navigation'

export type SiteSettings = {
    title: string,
    description: string,
    favIcon: File | string,
    ogImage: File | string,
    language: string,
    headCode: string,
    bodyCode: string,
    slug: string
}

const Page = () => {
    const params = useParams()
    const siteSlug = params.slug

    const { data, isLoading, isError } = useQuery({
        queryKey: ['siteSettings', siteSlug],
        queryFn: async () => {
            const { data } = await axios.get(`/api/v1/sites/settings/${siteSlug}`)
            return data as SiteSettings
        },
    })
    console.log(data)

    if (isLoading) return <Loading />
    if (isError) return <ErrorMessage />

    return (
        <div>
            <Tabs defaultValue="first">
                <Tabs.List>
                    <Tabs.Tab value="first">General</Tabs.Tab>
                    <Tabs.Tab value="second">Domain</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="first">
                    {data && <SiteSettingsForm {...data} />}
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