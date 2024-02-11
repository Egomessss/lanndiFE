import { useState, useEffect } from "react";
import axios from '../lib/axios'


export const useAxiosFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Extract method, body, and params from options, defaulting method to 'get'
    const { method = 'get', body = null, params = null } = options;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                // Construct the Axios request configuration
                const config = {
                    url, // Since baseURL is set in the Axios instance, this is appended to baseURL
                    method,
                    data: body,
                    params,
                    // Headers are already set in the Axios instance, but you can add or override them here if needed
                };

                const response = await axios(config);
                setData(response.data);
            } catch (err) {
                setError(err.response ? err.response.data : 'Could not fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // Dependencies include `url` and stringified `options` to handle changes
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
};
