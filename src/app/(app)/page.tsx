'use client';

import CreateSiteModal from '@/components/dashboard/CreateSiteModal';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/(app)/Loading';
import ErrorMessage from '@/app/(app)/Error';

export type Site = {
    id: number;
    name: string;
    slug: string;
    isLive: boolean;
    ogImage: string | null; // Assuming ogImage could be null if not set
};

const Dashboard = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['userSites'],
        queryFn: async () => {
         const {data} = await axios.get('/api/v1/sites');
            return data as Site[];
        },
    })

    if (isLoading) return <Loading/>
    if (isError) return <ErrorMessage/>


    return (
        <div>
            <div className="w-full flex justify-between items-center">
                <h1>Sites</h1>
                <CreateSiteModal />
            </div>
            <div className="grid grid-cols-4 gap-4 my-8">
                {data?.map((site) => (
                  // Assuming your data has an id and other properties you need to pass to DashboardCard
                  <DashboardCard key={site.slug} {...site} />
                ))}
            </div>

        </div>
    )
}

export default Dashboard
