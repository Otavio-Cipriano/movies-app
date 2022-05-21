import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY

type MediaType = 'all' | 'movie' | 'tv' | 'person'

type TimeWindow = 'day' | 'week'

interface Trends{
    page: number,
    results: Trend[],
    totalPages?: number,
    totalResults?: number
  }
  
  interface Trend{
    id: number,
    title: string,
    adult: boolean,
    backdrop_path: string,
    genres_ids: number[],
    mediaType: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }
  

export default function useFetchTrend(mediaType: MediaType, timeWindow: TimeWindow){
    const [trends, setTrends] = useState<Trends | undefined | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const url = `${baseUrl}trending/${mediaType}/${timeWindow}?api_key=` + apiKey 

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTrends(data)
            setLoading(false)
        })
        .catch(err => setError(true))
    },[url])

    return {trends, loading, error} 
}