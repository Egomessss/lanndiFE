'use client'


import Link from 'next/link'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/auth'
import AuthSessionStatus from '../AuthSessionStatus'

import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'


const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm} className="flex flex-col gap-4 min-w-96">
                {/* Email Address */}
                <TextInput
                    type="email"
                    leftSection={ <IconAt size="1rem" />}
                    label="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    error={errors?.email}
                />


                {/* Password */}

                <PasswordInput
                    label="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    error={errors?.password}
                />
                {/* Remember Me */}
                <Checkbox
                    label="Remember me"
                    checked={shouldRemember}
                    onChange={(event) => setShouldRemember(event.currentTarget.checked)}
                />

                <div className="flex items-center justify-between ">
                    <Link
                        href="/forgot-password"
                        className="underline text-sm ">
                        Forgot your password?
                    </Link>

                    <Button type="submit">Login</Button>
                </div>
            </form>
        </>
    )
}

export default Login
