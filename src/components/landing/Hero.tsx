import React from 'react'
import { Button } from '@mantine/core'
import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'


const Hero = () => {
    return (
        <section className="relative">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="mx-auto mb-12 w-full max-w-5xl text-center md:mb-16 lg:mb-20">
                    <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                        Simple, beautiful, responsive one-page sites without
                        <span
                            className="bg-cover bg-center px-4 text-white"
                            style={{
                                backgroundImage:
                                    "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')",
                            }}
                        >
                            code
                        </span>
                        <span>and </span>
                        <span
                            className="bg-cover bg-center px-4 text-white"
                            style={{
                                backgroundImage:
                                    "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')",
                            }}
                        >
                            compromises
                        </span>
                        .
                    </h1>
                    <p className="mx-auto mb-5 py-8 text-xl text-[#636262] lg:mb-8">
                        Launch your one-page sites for pretty much anything!
                        Whether it's a personal profile, a landing page, a
                        portfolio, a lead magnet or something else lanndi has
                        you covered!
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button variant="outline">Log in</Button>
                        <Link href='/page/create' >
                            <Button rightSection={<IconArrowRight />}>
                                Choose your template
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="relative mx-auto h-[512px]">
                    <img
                        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d247ab06a755ee4aaee_magicpattern-KfFmwa7m5VQ-unsplash.jpg"
                        alt=""
                        className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
                </div>
            </div>
            <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
                alt=""
                className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
            />
            <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
                alt=""
                className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block"
            />
        </section>
    )
}

export default Hero
