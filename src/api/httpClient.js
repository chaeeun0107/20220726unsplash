import axios from "axios";

export const httpClient = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL,
    timeout:6000,
    headers:{
        Authorization : `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    }
})