import DashboardCard from '../../../components/dashboard/DashboardCard'
import { Button, Modal } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks'
import CreateSiteModal from '@/components/dashboard/CreateSiteModal'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {

    return (
        <div>
            <div className="w-full flex justify-between items-center">
                <h1>Sites</h1>
                <CreateSiteModal />
            </div>
            <div className="grid grid-cols-3 my-8">
                <DashboardCard />
            </div>

        </div>
    )
}

export default Dashboard
