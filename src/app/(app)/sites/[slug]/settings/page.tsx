'use client'
import React, { useState } from 'react'
import { Button, Divider, Tabs } from '@mantine/core'
import Link from 'next/link'
import { langs } from '@uiw/codemirror-extensions-langs'
import CodeMirror from '@uiw/react-codemirror'

const Page = () => {
    const [value, setValue] = useState('console.log(\'hello world!\');')
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val)
        setValue(val)
    }, [])
    return (
        <div>
            <Tabs defaultValue="first">
                <Tabs.List >
                    <Tabs.Tab value="first">General settings</Tabs.Tab>
                    <Tabs.Tab value="second">Domain</Tabs.Tab>
                    <Tabs.Tab value="third">Extra</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="first">
                    <div className="flex items-start gap-8 flex-col my-4">

                        <div className="flex items-start gap-2 flex-col ">
                            <h2>Title</h2>
                            <p>lanndi</p></div>


                        <div className="flex items-start gap-2 flex-col ">
                            <h2>Description</h2>
                            <p>Website builder</p></div>
                        <div className="flex items-start gap-2 flex-col justify-start">
                            <h2>Image</h2>
                            <p>1200 x 630 pixels. PNG, SVG, JPG or Webp. Shown when shared on social media.</p>
                            <img className="w-[1200px] h-[630   px] rounded-lg"
                                 src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                 alt="" />


                        </div>
                        <div className="flex items-start gap-2 flex-col w-full">
                            <div className="flex justify-between w-full"><h2>Custom head code</h2>
                            </div>
                            <div className="w-full">
                                <CodeMirror value={value} height="200px" theme="dark"
                                            extensions={[langs.javascript()]}
                                            onChange={onChange} /></div>
                        </div>

                        <div className="flex items-start gap-2 flex-col w-full">
                            <div className="flex justify-between w-full"><h2>Custom body code</h2>
                            </div>
                            <div className="w-full">
                                <CodeMirror value={value} height="200px" theme="dark"
                                            extensions={[langs.javascript()]}
                                            onChange={onChange} />
                            </div>
                        </div>




                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="second">
                    <div className="w-full flex flex-col gap-4 my-10">

                        <div className="flex items-start gap-2 flex-col w-full">
                            <div className="flex justify-between w-full"><h2>Domain</h2>
                            </div>
                            <div
                                className="w-full h-52 border border-solid rounded-lg flex flex-col gap-4 justify-center items-center">
                                <p>This site doesn&apos;t have any connect domains yet</p>
                                <Button>Connect your domain</Button>
                            </div>
                        </div>


                        <div className="flex justify-between ">
                            <div className="flex items-start gap-2 flex-col justify-start">
                                <h2>Subdomain</h2>
                                <p>lanndi</p></div>
                        </div>
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="third">
                    <div className="flex items-start gap-2 flex-col justify-start">
                        <h2>Favicon</h2>
                        <p>32 x 32 pixels. ICO, PNG, SVG, or JPG. Shown in browser tabs.</p>
                        <img className="w-[32px] h-[32px] rounded-lg"
                             src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                             alt="" />


                    </div>

                    <div className="flex items-start gap-2 flex-col ">
                        <h2>Site language</h2>
                        <p>en</p>
                    </div>
                </Tabs.Panel>
            </Tabs>
            <div className="flex items-end justify-end w-full">
                <Button>Save Changes</Button></div>
        </div>
    )
}

export default Page