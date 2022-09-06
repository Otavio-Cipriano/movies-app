import axios from "axios";
import { useEffect, useState } from "react";
import Genre from "../interfaces/genre";
import tmdb from "../services/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function useGenreList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [genres, setGenres] = useState<Genre[]>();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setLoading(true);
    tmdb.get(`/genre/movie/list?api_key=${API_KEY}`).then((res) => {
      //   setGenres(res.data.results);
      console.log(res.data);
      setLoading(false);
    });

    return () => {
      cancelToken.cancel();
    };
  }, []);

  return {
    genres,
  };
}
