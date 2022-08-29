import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Movie from "../interfaces/movie";

import tmdb from "../services/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useMoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    setLoading(true)
    tmdb.get(`/discover/movie?api_key=${API_KEY}`)
    .then((res) =>{
      setMovies(res.data.results)
      setLoading(false)
    })

    return () => {
      cancelToken.cancel()
    }
  }, []);

  return {
    movies,
    loading
  };
};
