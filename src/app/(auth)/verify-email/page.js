'use client';


import { useState } from 'react';
import { Button } from '@mantine/core';
import axios from '../../../lib/axios';
import { notifications } from '@mantine/notifications';



const Page = () => {

  const [status, setStatus] = useState(null);

  const resendEmailVerification = () => {
    axios
      .post('/email/verification-notification')
      .then(response =>
        setStatus(response.data.status)
      );
  };

  if(status === 'verification-link-sent') {
    notifications.show({
      title: 'Verification Email Sent',
      message: 'A new verification link has been sent to your email address.',
      color: 'green',
    });
  }

  return (
    <div className="max-w-96 flex flex-col gap-4 ">
      <p>
        Thanks for signing up! Before getting started, could you verify
        verify your email address by clicking on the link we just
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        emailed to you? If you didn't receive the email, we will gladly
        gladly send you another.
      </p>
      <Button onClick={() => resendEmailVerification({ setStatus })}>
        Resend Verification Email
      </Button>
      {status === 'verification-link-sent' && (
        <p className="text-green-500">
          A new verification link has been sent to the email address
          address you provided during registration.
        </p>
      )}
    </div>
  );
};

export default Page;
