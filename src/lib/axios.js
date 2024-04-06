'use client';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/backend',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_URL, // replace this your actual origin
    // 'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
    // 'Referer': process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default axios;