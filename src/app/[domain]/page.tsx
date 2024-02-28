'use client'

import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import axios from "@/lib/axios";
import Loading from "@/app/(app)/Loading";
import ErrorMessage from "@/app/(app)/Error";
import React from "react";
import {SiteSettings} from "@/app/(app)/sites/[slug]/settings/page";


type Page = {
    slug:string,
    html:string,
    css:string
};


const Homepage = () => {

    const params = useParams()
    const siteSlug = 'random'
    const pageId = '/'

    const { data, isLoading, isError } = useQuery({
        queryKey: ['siteSettings', siteSlug],
        queryFn: async () => {
            const { data } = await axios.get(`/api/v1/sites/${siteSlug}/${pageId}`)
            return data as Page
        },
    })
    console.log(data)

    // if (isLoading) return <Loading />
    // if (isError) return <ErrorMessage />


    return (
        <div>

        </div>
    );
};

export default Homepage