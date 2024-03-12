'use client';


import Link from 'next/link';

import { useState } from 'react';
import { useAuth } from '../../../hooks/auth';

import { Anchor, Button, PasswordInput, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const Page = () => {
  const { register } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/',
  });


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const submitForm = event => {
    event.preventDefault();

    register({
      email,
      password,
      setErrors,
    });
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col gap-4 ">
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

      <Anchor component={Link} size="sm" href="/login">
        Already registered?
      </Anchor>
      <Button type="submit" >Register</Button>
    </form>
  );
};

export default Page;
