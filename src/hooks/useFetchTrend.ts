import { useEffect, useState } from "react";
import useRequestAPI from "./useRequestApi";

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
    const {api} = useRequestAPI()

    useEffect(()=>{
        setLoading(true)
        api
        .get(`trending/${mediaType}/${timeWindow}`)
        .then(res => {
          setTrends(res.data)
        })
        .catch(function (error) {
          console.log(error);
          setError(error)
        })
        .then(()=> setLoading(false))
    },[])

    return {trends, loading, error} 
}