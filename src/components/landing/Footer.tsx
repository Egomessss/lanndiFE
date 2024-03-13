import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="p-4 flex flex-col text-xs">
            <div className="flex w-full justify-between">
                <span className=" text-gray-500 sm:text-center ">
                    © 2024 lanndi™ . All Rights Reserved.
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
            <div className="flex gap-2 text-xs w-full justify-center mt-2">
                <Link href="/privacy-policy">Privacy Policy</Link>{' '}
                <Link href="/terms-and-conditions">Terms</Link>
            </div>
        </footer>
    )
}

export default Footer
