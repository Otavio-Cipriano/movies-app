import { useState } from "react"

interface iMovies{
    page: number,
    results: [],
    total_pages: number,
    total_results: number,
}

export const useMoviesList = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [movies, setMovies] = useState<iMovies>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  
  
}
