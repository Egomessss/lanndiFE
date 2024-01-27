import DashboardCard from '../../../components/dashboard/DashboardCard'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <div>
            <div className="w-full flex justify-between items-center">
                <h1>Sites</h1>
                <Button leftSection={<IconPlus size="1rem" />}>New Site</Button>
            </div>
            <div className="grid grid-cols-3 my-8"><DashboardCard /></div>

        </div>
    )
}

export default Dashboard
