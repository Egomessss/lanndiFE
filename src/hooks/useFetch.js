import { useState, useEffect } from "react";

export const useFetch = (url, options) => {
    // add headers
    // add post, get and patch, file upload?

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setLoading(false);
                setData(json);
                setError(null);
            } catch (error) {
                setError(`${error} Could not Fetch Data`);
                setLoading(false);
            }
        };
        fetchData();
    }, [options, url]);
    return { data, loading, error };
};