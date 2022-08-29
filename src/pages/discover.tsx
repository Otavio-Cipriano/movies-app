import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useMoviesList } from "../hooks/useMoviesList";
import tmdb from "../services/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY


const Discover: NextPage = () => {
  const { movies, loading } = useMoviesList()
  
  return (
    <div className="discover">
      <Head>
        <title>Discover</title>
      </Head>
      {
        !loading ? 
        <div className="discover__list">
          {
            movies.map((movie, idx) =>{
              return (
                <MovieCard key={idx} movie={movie}/>
              )
            })
          }
        </div> : ''
      }
    </div>
  );
};

export default Discover;
