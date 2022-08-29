import React from 'react'
import Movie from '../../interfaces/movie'

interface MovieCard{
    movie: Movie,
}

export default function MovieCard({movie}:MovieCard) {
  return (
    <div className='movie-card'>{movie.title}</div>
  )
}
