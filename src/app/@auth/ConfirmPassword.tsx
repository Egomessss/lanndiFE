import { useEffect, FormEventHandler } from 'react'

import { Head, useForm } from '@inertiajs/react'
import { Button, TextInput } from '@mantine/core'

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('password.confirm'))
    }

    return (
        <>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit}>
                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    value={data.password}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                />

                <div className="mt-4 flex items-center justify-end">
                    <Button
                        type="submit"
                        className="ml-4"
                        disabled={processing}
                    >
                        Confirm
                    </Button>
                </div>
            </form>
        </>
    )
}
