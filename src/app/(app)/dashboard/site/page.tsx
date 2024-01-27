import React from 'react'
import { Button, Divider } from '@mantine/core'

const Page = () => {
    return (
        <div>
            <p>lanndi</p>
            <div className="flex justify-between ">
                <h1>General Settings</h1>
                <Button>Editor</Button>
            </div>

            <div className="w-full flex flex-col gap-4 my-10">
                <div className="flex justify-between ">
                    <p>Site Name</p>
                    <p>lanndi</p>
                    <Button>Edit</Button>
                </div>
                <Divider my="md" />
                <div className="flex justify-between ">
                    <p>Domain</p>
                    <p>lanndi</p>
                    <Button>Edit</Button>
                </div>
                <Divider my="md" />
                <div className="flex justify-between ">
                    <p>Subdomain</p>
                    <p>lanndi</p>
                    <Button>Edit</Button>
                </div>
                <Divider my="md" />
                <div className="flex justify-between ">
                    <div>
                        <p>Favicon</p>
                        <p>32 x 32 pixels. ICO, PNG, GIF, SVG, or JPG. Shown in browser tabs.</p>
                    </div>
                    <img className="w-[32px] h-[32px] rounded-lg"
                         src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                         alt="" />
                    <Button>Upload</Button>
                </div>

            </div>
        </div>
    )
}

export default Page