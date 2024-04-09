'use client';


import { useState } from 'react';
import { Button } from '@mantine/core';
import axios from '../../../lib/axios';


const Page = () => {

  const [status, setStatus] = useState(null);

  const resendEmailVerification = () => {
    axios
      .post('/email/verification-notification')
      .then(response => setStatus(response.data.status));
  };

  return (
    <div className="max-w-96 flex flex-col gap-4 ">
      <p>
        Thanks for signing up! Before getting started, could you verify
        verify your email address by clicking on the link we just
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        emailed to you? If you didn't receive the email, we will gladly
        gladly send you another.
      </p>

      {status === 'verification-link-sent' && (
        <p>
          A new verification link has been sent to the email address
          address you provided during registration.
        </p>
      )}

      <Button onClick={() => resendEmailVerification({ setStatus })}>
        Resend Verification Email
      </Button>
    </div>
  );
};

export default Page;
