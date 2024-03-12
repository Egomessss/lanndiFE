'use client';


import Link from 'next/link';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth';
import AuthSessionStatus from '../AuthSessionStatus';

import { Anchor, Button, Checkbox, PasswordInput, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

interface FormErrors {
  email?: string;
  password?: string;
}


const Login = () => {


  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState(null);


  const submitForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <>
      <AuthSessionStatus className="mb-4" status={status} />
      <form onSubmit={submitForm} className="flex flex-col gap-4 min-w-96">
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
        {/* Remember Me */}
        <Checkbox
          label="Remember me"
          checked={shouldRemember}
          onChange={(event) => setShouldRemember(event.currentTarget.checked)}
        />

        <div className="flex items-center justify-between ">
          <Anchor component={Link} size="sm" href="/forgot-password" >
            Forgot your password?
          </Anchor>
          <Anchor component={Link} size="sm" href="/register" >
            Register here
          </Anchor>

          <Button type="submit">Login</Button>
        </div>
      </form>
    </>
  );
};

export default Login;
