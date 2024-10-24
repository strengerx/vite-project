import { useEffect, useState } from 'react'
const API_BASE_URL = import.meta.env.VITE_APP_MOVIE_BASE_URL
const API_KEY = import.meta.env.VITE_APP_MOVIE_API_KEY


const useFetch = (path) => {
    const [data, setData] = useState()

    useEffect(() => {
        const get = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}${path}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${API_KEY}`
                    }
                })
            } catch (e) {
                console.log(e);
            }
        }
    }, [])

    return
}

export default useFetch