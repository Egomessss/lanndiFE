import { Button } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import React from 'react'
import Link from 'next/link'
import { DarkModeButton } from '@/components/common/DarkModeButton/DarkModeButton'


const Navbar = () => {

    return (
        <div className="flex justify-between px-4 py-8">
            <a href="/">lanndi</a>
            <div className="flex items-center gap-4">
               {/*<DarkModeButton/>*/}
                <Button variant='subtle'>Log in</Button>
                <Link href='page/create'>
                    <Button rightSection={<IconArrowRight />}>
                        Choose your template
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar