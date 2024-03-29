import Link from 'next/link'
import AuthCard from './AuthCard'


export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen w-full">

                <Link className="no-underline text-white" href="/public">
                    <h1>Welcome to lanndi</h1>
                </Link>

                {children}

            </div>
        </div>
    )
}

export default Layout
