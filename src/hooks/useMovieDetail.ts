import { useState } from "react"

interface IMovieDetail{
  id: string
}

export default function useMovieDetail({id}: IMovieDetail) {
  const [movie, setMovie] = useStates()
  
  return {}
}
