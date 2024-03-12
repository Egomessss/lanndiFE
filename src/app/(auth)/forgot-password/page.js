'use client';


import { useState } from 'react';
import { useAuth } from '../../../hooks/auth';
import AuthSessionStatus from '../AuthSessionStatus';

import { Button, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';


const Page = () => {
  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  });

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = event => {
    event.preventDefault();

    forgotPassword({ email, setErrors, setStatus });
  };

  return (
    <div  className="max-w-96">
      <p className=" text-balance text-center my-4">
        Forgot your password? No problem. Just let us know your email
        email address and we will email you a password reset link that
        that will allow you to choose a new one.
      </p>

      {/* Session Status */}
      <AuthSessionStatus className="mb-4" status={status} />

      <form onSubmit={submitForm} className="flex flex-col gap-4 w-full">
        {/* Email Address */}
        <TextInput
          type="email"
          leftSection={<IconAt size="1rem" />}
          label="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          error={errors?.email}
        />


        <Button type="submit">Email Password Reset Link</Button>

      </form>
    </div>
  );
};

export default Page;
