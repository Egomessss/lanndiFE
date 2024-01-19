import React from 'react'
import { Title } from '@mantine/core'

const Features = () => {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="mx-auto py-20 w-full max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold md:text-5xl">
                        But wait! There's
                        <span
                            className="bg-cover bg-center bg-no-repeat px-4 text-white"
                            style={{
                                backgroundImage: 'url(\'https://assets.website-files.com/63904f663019b0d8edf8d57c/63915f9749aaab0572c48dae_Rectangle%2018.svg\')',
                            }}
                        >
                           way more!
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
                    <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                        <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                            <img
                                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639157f1a197859a6cd7f265_image%203.png"
                                alt=""
                                className="relative z-10 inline-block h-8"
                            />
                            <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p className="mb-4 text-xl font-semibold">Free SSL</p>
                        <p>
                            Every page is published and secured with a free SSL certificate.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                        <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                            <img
                                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915859fa889834c4f1ff92_image%203-2.png"
                                alt=""
                                className="relative z-10 inline-block h-8"
                            />
                            <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p className="mb-4 text-xl font-semibold">Custom domains</p>
                        <p>
                            Publish your site with any custom domain you own!
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                        <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                            <img
                                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639158510667812dff08e1af_image%203-4.png"
                                alt=""
                                className="relative z-10 inline-block h-8"
                            />
                            <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p className="mb-4 text-xl font-semibold">
                            Custom code
                        </p>
                        <p>
                            Add custom HTML, CSS and JavaScript code to your landing page. Embed your own custom code and widgets from third-party services like Stripe, PayPal, Gumroad, Typeform, and more.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                        <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                            <img
                                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391585b7b7cd87baef5e9ec_image%203-1.png"
                                alt=""
                                className="relative z-10 inline-block h-8"
                            />
                            <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p className="mb-4 text-xl font-semibold">CDN</p>
                        <p>
                            Reduce web page load times, improve performance, and reduce bandwidth and infrastructure costs by caching assets across hundreds of geographically distributed servers.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                        <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                            <img
                                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639158557ac2b528531836f1_image%203-3.png"
                                alt=""
                                className="relative z-10 inline-block h-8"
                            />
                            <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p className="mb-4 text-xl font-semibold">SEO</p>
                        <p>
                            Meta tags.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                        <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                            <img
                                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639157f3db4f4b8767c499ba_image%203-5.png"
                                alt=""
                                className="relative z-10 inline-block h-8"
                            />
                            <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                        </div>
                        <p className="mb-4 text-xl font-semibold">Resources</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit ut aliquam, purus sit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
