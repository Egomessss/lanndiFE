import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api.lanndi.com' : process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  withXSRFToken: true
})

export default axios