import React from 'react'
import Movie from '../../interfaces/movie'

import {FaStar} from 'react-icons/fa'

const image_path = 'https://image.tmdb.org/t/p/w500'

interface MovieCard{
    movie: Movie,
}

export default function MovieCard({movie}:MovieCard) {

  return (
    <div className='movie-card'>
      <span><FaStar className='star'/>{movie.vote_average}</span>
      <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
      <p>{movie.title}</p>
    </div>
  )
}
