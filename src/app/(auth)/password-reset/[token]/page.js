'use client'


import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAuth } from '../../../../hooks/auth'
import AuthSessionStatus from '../../AuthSessionStatus'
import Label from '../../../../components/common/Label'
import Input from '../../../../components/common/Input'
import InputError from '../../../../components/common/InputError'
import Button from '../../../../components/common/Button'
import { PasswordInput, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';


const PasswordReset = () => {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        setEmail(searchParams.get('email'))
    }, [searchParams.get('email')])

    return (
        <>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <TextInput
                  type="email"
                  leftSection={<IconAt size="1rem" />}
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

                {/* Confirm Password */}
                <PasswordInput
                  label="Password confirmation"
                  value={passwordConfirmation}
                  onChange={event => setPasswordConfirmation(event.target.value)}
                  error={errors?.passwordConfirmation}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button>Reset Password</Button>
                </div>
            </form>
        </>
    )
}

export default PasswordReset
