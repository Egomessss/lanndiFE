import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import axios from "@/lib/axios";


export type EditorData = {
    projectId: string
    data: object
}

// Define the custom hook
function useEditorData() {
    // Extract the `slug` parameter from the URL
    const params = useParams();
    const siteSlug = params.slug;

    // Use `useQuery` to fetch editor data based on `siteSlug`
    const { data, isLoading, isError } = useQuery({
        queryKey: ['editorData', siteSlug],
        queryFn: async () => {
            // Replace `/api/v1/sites/editor/${siteSlug}` with your actual API endpoint
            const { data } = await axios.get(`/api/v1/sites/editor/${siteSlug}`);
            return data as EditorData; // Assuming `data` is of type `EditorData`
        },
    });

    // Return the necessary information from the hook
    return { data, isLoading, isError };
}

export default useEditorData;
