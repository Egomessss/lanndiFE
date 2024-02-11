'use client'
import DashboardCard from '../../../components/dashboard/DashboardCard'
import { Button, Modal } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks'
import CreateSiteModal from '@/components/dashboard/CreateSiteModal'
import { useFetch } from '@/hooks/useFetch'
import { useEffect } from 'react'

type Site = {
    name: string;
    slug: string;
    isLive: boolean;
    ogImage: string | null; // Assuming ogImage could be null if not set
};

const Dashboard = () => {

    const { data, loading, error } = useFetch('/api/v1/sites');
    console.log(data)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div>
            <div className="w-full flex justify-between items-center">
                <h1>Sites</h1>
                <CreateSiteModal />
            </div>
            <div className="grid grid-cols-4 gap-4 my-8">
                {data?.data?.map((site:Site) => (
                    // Assuming your data has an id and other properties you need to pass to DashboardCard
                    <DashboardCard key={site.slug} data={site} />
                ))}
            </div>

        </div>
    )
}

export default Dashboard
