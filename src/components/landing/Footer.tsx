import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center p-4 gap-4 text-xs">
            <p className='text-center'>
                SpsFeed is a human-curated and maintained directory of
                early-stage bootstrapped startups that are under 10k MRR,
                whether you're looking for an Ai startup, an inexpensive
                alternative to some overpriced startups offering or just to see
                the next big thing… We’re here
            </p>
            <div className="flex w-full justify-between">
                <span className=" text-gray-500 sm:text-center ">
                    © 2024 spsFeed™ . All Rights Reserved.
                </span>
                <p className=" ">
                    Created by{' '}
                    <a
                        href="https://twitter.com/TecEdSocial"
                        className=" hover:underline  "
                        target="_blank"
                    >
                        Edmilson
                    </a>
                </p>
            </div>
            <div className="mt-2 flex w-full justify-center gap-2 text-xs">
                <Link href="/privacy-policy">Privacy Policy</Link>{' '}
                <Link href="/terms-and-conditions">Terms</Link>
            </div>
        </footer>
    )
}

export default Footer
