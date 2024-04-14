'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

const TanstackProvider = ({ children }:
                            {
                              children: React.ReactNode
                            },
) => {

  // const router = useRouter();


  const [queryClient] = useState(() => new QueryClient(
    {
      defaultOptions: {
        // @ts-ignore
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
      },
    },
  ));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default TanstackProvider;