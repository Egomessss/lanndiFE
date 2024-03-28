import { useQuery } from '@tanstack/react-query';

import axios from '@/lib/axios';
import { User } from '@/lib/types';
import { usePathname, useRouter } from 'next/navigation';

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
  });

  const logout = async () => {
    await axios.post('/logout').then(() => {
      document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=Strict';
    });
    router.push('/login');
  };

  return { user, isLoading, error, logout };
};

export default useUser;
