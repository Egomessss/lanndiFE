'use client'
import React, { useState } from 'react'
import { Button, Divider, FileInput, Tabs, TextInput } from '@mantine/core'
import Link from 'next/link'
import { langs } from '@uiw/codemirror-extensions-langs'
import CodeMirror from '@uiw/react-codemirror'
import { useForm } from '@mantine/form'

const Page = () => {
    const [value, setValue] = useState('console.log(\'hello world!\');')
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val)
        setValue(val)
    }, [])

    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            favIco: null,
            ogImage: null,
            language: 'en',
            headCode: '',
            bodyCode: '',
        },
        // validate: {
        //     name: (value) => {
        //         if (typeof value !== 'string') return 'Name must be a string'
        //         if (value.length <= 5) return 'Name must have at least 5 letters'
        //         return null
        //     },
        //     subdomain: (value) => {
        //         if (typeof value !== 'string') return 'Subdomain must be a string'
        //         if (value.length <= 5) return 'Subdomain must have at least 5 letters'
        //         return null
        //     },
        // },
    })
    return (
        <div>
            <Tabs defaultValue="first">
                <Tabs.List>
                    <Tabs.Tab value="first">General</Tabs.Tab>
                    <Tabs.Tab value="second">Domain</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="first">
                    <form className="flex items-start gap-8 flex-col my-4">

                        <div className="flex items-start gap-2 flex-col ">
                            <h2>Title</h2>
                            <TextInput
                                withAsterisk
                                label="Title"
                                {...form.getInputProps('title')}
                            />
                        </div>


                        <div className="flex items-start gap-2 flex-col ">
                            <h2>Description</h2>
                            <TextInput
                                withAsterisk
                                label="Title"
                                {...form.getInputProps('description')}
                            />
                            <div className="flex items-start gap-2 flex-col justify-start">
                                <h2>Image</h2>
                                <p>1200 x 630 pixels. PNG, SVG, JPG or Webp. Shown when shared on social media.</p>
                                <FileInput  {...form.getInputProps('ogImage')} />
                                <p>Preview</p>
                                <img className="w-[1200px] h-[630   px] rounded-lg"
                                     src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                     alt="" />
                                <p>Previous</p>
                                <img className="w-[1200px] h-[630   px] rounded-lg"
                                     src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                     alt="" />
                            </div>
                            <div className="flex items-start gap-2 flex-col justify-start">
                                <h2>Favicon</h2>
                                <p>32 x 32 pixels. ICO, PNG, SVG, or JPG. Shown in browser tabs.</p>
                                <FileInput  {...form.getInputProps('favIco')} />
                                <p>Preview</p>
                                <img className="w-[1200px] h-[630   px] rounded-lg"
                                     src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                     alt="" />
                                <p>Previous</p>
                                <img className="w-[1200px] h-[630   px] rounded-lg"
                                     src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                     alt="" />


                            </div>

                            <div className="flex items-start gap-2 flex-col ">
                                <h2>Site language</h2>
                                <TextInput
                                    withAsterisk
                                    label="Title"
                                    {...form.getInputProps('language')}
                                />
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


                    </form>
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

            </Tabs>
            <div className="flex items-end justify-end w-full">
                <Button>Save Changes</Button></div>
        </div>
    )
}

export default Page