import Link from 'next/link'
import AuthCard from './AuthCard'
import { Title } from '@mantine/core';


export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen w-full ">
                <Link className="no-underline text-inherit" href="https://lanndi.com">
                    <Title>Welcome to lanndi</Title>
                </Link>
                {children}
            </div>
        </div>
    )
}

export default Layout
