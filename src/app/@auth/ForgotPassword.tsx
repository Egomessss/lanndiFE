
import { useForm } from '@inertiajs/react'
import { Button, TextInput, Title } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import { FormEventHandler } from 'react'
import AuthLayout from '@/layouts/AuthLayout'

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        // post(route("password.email"));
    }

    return (
        <AuthLayout>
            <div className="flex w-full gap-2 text-start">
                <Title
                    className="whitespace-nowrap text-start"
                    order={1}
                >
                    Reset your
                </Title>{' '}
                <Title
                    className="whitespace-nowrap text-start"
                    order={1}
                >
                    password
                </Title>{' '}
                {status === 'verification-link-sent' && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}
            </div>

            <div className="text-sm">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>
            <form
                className="w-full"
                onSubmit={submit}
            >
                <TextInput
                    placeholder="Insert Your email Here..."
                    label="Your email"
                    leftSection={<IconAt size="0.8rem" />}
                    withAsterisk
                    required
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />



                <div className="mt-4 flex items-center justify-end">
                    <Button
                        variant="submit"
                        className="ml-4"
                        disabled={processing}
                    >
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </AuthLayout>
    )
}
