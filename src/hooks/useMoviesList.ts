import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Movie from "../interfaces/movie";

import tmdb from "../services/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useMoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    setLoading(true)
    tmdb.get(`/discover/movie?api_key=${API_KEY}&page=${page}`)
    .then((res) =>{
      setMovies(res.data.results)
      setPage(res.data.page)
      setTotalPages(res.data['total_pages'])
      setLoading(false)
    })

    return () => {
      cancelToken.cancel()
    }
  }, [page]);

  return {
    movies,
    loading,
    page,
    totalPages,
    setPage
  };
};
