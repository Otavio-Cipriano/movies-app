import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import { useMoviesList } from "../hooks/useMoviesList";

interface IPaginate {
  selected: number
}

const Discover: NextPage = () => {
  const { movies, loading, totalPages, setPage } = useMoviesList()

  const handlePageClick = ({selected}: IPaginate) => {
   setPage(selected + 1)
  }
  
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
        </div> 
        :
        <Spinner />
      }
      <div className="paginate">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={loading ? 0 : totalPages}
        previousLabel="< previous"
      />
      </div>
    </div>
  );
};

export default Discover;
