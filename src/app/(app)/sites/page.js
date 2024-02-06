import DashboardCard from '../../../components/dashboard/DashboardCard'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <div>
            <div className="w-full flex justify-between items-center">
                <h1>Sites</h1>
                <Button component={Link} href="sites/123123/editor"  rightSection={<IconPlus size="1rem" />}>New Site</Button>
            </div>
            <div className="grid grid-cols-3 my-8"><DashboardCard /></div>

        </div>
    )
}

export default Dashboard
