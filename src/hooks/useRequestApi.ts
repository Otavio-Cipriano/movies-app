import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY


export default function useRequestAPI(){
    const api = axios.create({
        baseURL: baseUrl,
        params: {
            api_key: apiKey
        }
    })

    return {api}
}