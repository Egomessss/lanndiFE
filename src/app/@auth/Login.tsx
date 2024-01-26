import { FormEventHandler, useEffect } from 'react'

import { Head, Link, useForm } from '@inertiajs/react'
import {
    Button,
    Checkbox,
    Divider,
    PasswordInput,
    TextInput,
    Title,
} from '@mantine/core'
import { IconAt, IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import spsFeedLogo from '@/images/logonamenobg.webp'

import AuthLayout from '@/layouts/AuthLayout'
import { SocialButtons } from '@/components/common/SocialButtons/SocialButtons'

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string
    canResetPassword: boolean
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('login'))
    }

    return (
        <AuthLayout>
            <Head title="Login" />
            <div className="w-full">
                <div className="flex w-full items-center gap-2 text-center md:my-8">
                    <Link href="/">
                        {' '}
                        <img
                            src={spsFeedLogo}
                            alt=""
                            className="h-12"
                        />
                    </Link>

                    <Title order={1}>login</Title>
                </div>

                <SocialButtons />
                <Divider
                    className="w-full"
                    my="xs"
                    label="or"
                    labelPosition="center"
                />
                <form onSubmit={submit}>
                    <div>
                        <TextInput
                            placeholder="Insert Your email Here..."
                            label="Email"
                            leftSection={<IconAt size="0.8rem" />}
                            withAsterisk
                            id="emailInput"
                            required
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            error={errors.email}
                        />
                    </div>

                    <div className="mt-4">
                        <PasswordInput
                            label="Password"
                            placeholder="Insert Your Password Here..."
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-full"
                            error={errors.password}
                        />
                    </div>

                    <div className="mt-4 block">
                        <Checkbox
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                            label="Remember me"
                        />
                    </div>

                    <div className="mt-4  flex w-full flex-col items-center justify-end gap-4">
                        <div className="flex w-full flex-col  items-start gap-2 md:flex-row">
                            {' '}
                            <Link
                                href={route('register')}
                                className="w-full text-xs  no-underline"
                            >
                                Don't have an account?{' '}
                                <span className="underline">Register here</span>
                            </Link>{' '}
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="w-full text-xs  underline"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                        <Button
                            fullWidth
                            disabled={processing}
                            type="submit"
                        >
                            Log in
                        </Button>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}
