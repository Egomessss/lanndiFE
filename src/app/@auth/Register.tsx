import { Head, Link, useForm } from '@inertiajs/react'
import {
    Button,
    Divider,
    SegmentedControl,
    TextInput,
    Title,
} from '@mantine/core'
import React, { FormEventHandler, useEffect } from 'react'
import PasswordInputStrengthMeter from './PasswordInputStrengthMeter'
import spsFeedLogo from '@/images/logonamenobg.webp'
import AuthLayout from '@/layouts/AuthLayout'
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import { SocialButtons } from '@/components/common/SocialButtons/SocialButtons'

export default function Register({ status }: { status?: string }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        typeOfAccount: 'submit',
    })
    console.log(data)
    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('register'))
    }

    console.log(errors)

    return (
        <AuthLayout>
            <Head title="Register" />
            <div>
                <div className="flex w-full flex-col my-4 items-center justify-center gap-2 text-center">
                    <Link href="/">
                        {' '}
                        <img
                            src={spsFeedLogo}
                            alt=""
                            className="h-12"
                        />
                    </Link>
                    <Title
                        className="flex items-center gap-2 whitespace-nowrap text-start"
                        order={1}
                    >
                        Create your account
                    </Title>
                </div>

                <SocialButtons />
                <Divider
                    label="Or Email & Password"
                    labelPosition="center"
                    my="xs"
                />
                <form
                    className="flex flex-col gap-2"
                    onSubmit={submit}
                >
                    <TextInput
                        required
                        label="Email"
                        placeholder="Your email"
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1 block w-full"
                        radius="sm"
                        type="email"
                        error={errors.email}
                    />

                    <div className="">
                        <PasswordInputStrengthMeter
                            text="Password"
                            value={data.password}
                            setData={(e: any) =>
                                setData('password', e.target.value)
                            }
                            errors={errors.password}
                        />
                    </div>
                    {/*<div className="flex flex-col">*/}
                    {/*    <SegmentedControl*/}
                    {/*        orientation="vertical"*/}
                    {/*        fullWidth*/}
                    {/*        value={data.typeOfAccount}*/}
                    {/*        onChange={(value) => setData('typeOfAccount', value)}*/}
                    {/*        data={[*/}
                    {/*            {*/}
                    {/*                label: 'Interact with builders',*/}
                    {/*                value: 'feedback',*/}
                    {/*            },*/}
                    {/*            { label: 'Submit a post', value: 'submit' },*/}
                    {/*        ]}*/}
                    {/*    />*/}
                    {/*    <span className="text-red-500">{errors.typeOfAccount}</span>*/}
                    {/*</div>*/}
                    <div className=" flex items-center justify-between">
                        <Link
                            href={route('login')}
                            className="mr-4 rounded-md text-sm underline "
                        >
                            Already registered?
                        </Link>
                        <Button
                            loading={processing}
                            type="submit"
                            disabled={processing}
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}
