import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import DiscoverFilter from "../interfaces/discoverFilter";
import Movie from "../interfaces/movie";
import SortBy from "../interfaces/sortBy";
import tmdb from "../services/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface IMovieList {
  newFilter?: DiscoverFilter
}

export const useMoviesList = ({newFilter}:IMovieList) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [filter, setFilter] = useState<DiscoverFilter>()

  const updateFilter = (genre?: string, page?: number, sortBy?: string) => {
    let params: DiscoverFilter = {}

    params.with_genres = !genre ? ' ' : genre? genre : filter?.with_genres;
    params.page = page ? page : filter?.page? filter.page : 1;
    params.sort_by = sortBy ? `${sortBy}` : SortBy.popularityDesc;
    console.log(params)
    setFilter(params)
  }

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    setLoading(true)
    tmdb.get(`/discover/movie?api_key=${API_KEY}`,{ params: filter })
    .then((res) =>{
      setMovies(res.data.results)
      setPage(res.data.page)
      setTotalPages(res.data['total_pages'])
      setLoading(false)
    })

    return () => {
      cancelToken.cancel()
    }
  }, [filter]);

  return {
    movies,
    loading,
    page,
    totalPages,
    filter,
    setPage,
    updateFilter
  };
};
