import type { NextPage } from "next";
import Head from "next/head";
import MovieCard from "../components/MovieCard";
import Paginate from "../components/Paginate";
import Spinner from "../components/Spinner";
import { useMoviesList } from "../hooks/useMoviesList";

interface IHandlePageClick {
  selected: number
}

const Discover: NextPage = () => {
  const { movies, loading, totalPages, setPage } = useMoviesList()

  const handlePageClick = ({selected}: IHandlePageClick) => {
   setPage(selected + 1)
   console.log(selected)
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
      <Paginate
        clickHandler={handlePageClick}
        totalPages={loading ? 0 : totalPages}
        isLoading={loading}
        />
    </div>
  );
};

export default Discover;
