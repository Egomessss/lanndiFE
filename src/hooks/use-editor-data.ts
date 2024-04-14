import { useParams, usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';

export type EditorData = {
  projectId: string;
  data: object;
};

// Define the custom hook
function useEditorData() {
  const params = useParams();
  const siteSlug = params.slug;
  const slug = usePathname();
  const isDemo = slug === '/demo';

  // Use `useQuery` to fetch editor data based on `siteSlug`, or skip if `isDemo` is true
  const { data, isLoading, isError } = useQuery({
    queryKey: ['editorData', siteSlug],
    queryFn: async () => {
      if (isDemo) {
        // Immediately return a "mock" response or default value when in demo mode
        return null;
      }
      // Perform the actual data fetching for non-demo scenarios
      const response = await axios.get(`/api/v1/editor/${siteSlug}`);
      return response.data as EditorData;
    },
    staleTime: Infinity,
    // The query is enabled only if not in demo mode
    enabled: !isDemo,
  });

  // If `isDemo` is true, override `data` with null before returning
  return {
    data: isDemo ? null : data,
    isLoading,
    isError,
  };
}

export default useEditorData;
