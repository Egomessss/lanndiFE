'use client'

import { useState, useEffect } from "react";
import axios from '@/lib/axios'

export const useFormFetch = (endpoint, initOptions = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [options, setOptions] = useState(initOptions);

    // Define the base URL from environment variables
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;


    const doFetch = async (endpoint, options = {}) => {
        try {

            setIsLoading(true);
            setError(null);
            setValidationErrors({});
            const response = await axios(`${baseURL}${endpoint}`, {
                ...options,
                withCredentials: true,
            });
            const json = response.data;

            // No need to check response.ok here; Axios throws an error for non-2xx responses
            setData(json);
            setError(null);
        } catch (error) {
            if (error.response) {


                if (error.response.status === 422) {
                    // Handle Laravel validation errors
                    setValidationErrors(error.response.data.errors || {});
                }

                setError(error.response.data.message || 'Server responded with an error');
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                setError('No response was received');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                setError('An error occurred while setting up the request');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const { url, ...fetchOptions } = options;
        if (!url) return;

        doFetch(endpoint, fetchOptions);
    }, [options]); // Depend on options which now includes the URL

    const submitForm = async (method, formData, hasFiles = false) => {
        let headers = {};
        let body;

        if (hasFiles) {
            body = formData;
        } else {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(formData);
        }

        doFetch(endpoint, {
            method,
            headers,
            data: body,
        });
    };

    return { data, isLoading, error, validationErrors, submitForm };
};