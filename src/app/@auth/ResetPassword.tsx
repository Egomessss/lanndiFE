import { PageProps } from '@/types'

import { Head, useForm } from '@inertiajs/react'
import { Button, TextInput } from '@mantine/core'
import { FormEventHandler, useEffect } from 'react'

export default function ResetPassword({
    auth,
    token,
    email,
}: {
    auth: PageProps
    token: string
    email: string
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('password.store'))
    }

    return (
        <>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <TextInput
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />

                <TextInput
                    label="password"
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                />

                <TextInput
                    label="Password confirmation"
                    type="password"
                    id="passwordInput"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setData('password_confirmation', e.target.value)
                    }
                    error={errors.password_confirmation}
                />

                <div className="mt-4 flex items-center justify-end">
                    <Button
                        type="submit"
                        className="ml-4"
                        disabled={processing}
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </>
    )
}
