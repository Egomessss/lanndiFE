'use client';

import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { User } from '@/lib/types';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useUser = () => {
  const router = useRouter();
  const slug = usePathname();
  const isDemo = slug === '/demo';

  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await axios.get('/api/user');
      return response.data as User;
    },
    staleTime: Infinity,
    enabled: !isDemo,
    retry:3,
  });

  // console.log('query error',error);





  const logout = async () => {
    await axios.post('/logout').then(() => {
      document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=lax';
    });
    router.push('/login');
  };


  // @ts-ignore
  // error?.status === 401 && logout();

  return { user, isLoading, error, logout };
};

export default useUser;
