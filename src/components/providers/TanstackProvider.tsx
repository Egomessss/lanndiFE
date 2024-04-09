'use client';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TanstackProvider = ({ children }:
                            {
                              children: React.ReactNode
                            },
) => {

  // const router = useRouter();

  const [queryClient] = useState(() => new QueryClient(
  //   {
  //   defaultOptions: {
  //     queries: {
  //       onError: (error) => {
  //         if (error && error.status === 401 || error.status === 419) {
  //           // Delete the cookie
  //           document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=lax';
  //           // Redirect to the login page
  //           router.push('/login');
  //         }
  //       },
  //     },
  //   },
  // }
  ));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default TanstackProvider;