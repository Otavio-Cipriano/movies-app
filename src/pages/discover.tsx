import type { NextPage } from "next";
import Head from "next/head";
import Filter from "../components/Filter";
import MovieCard from "../components/MovieCard";
import Paginate from "../components/Paginate";
import Spinner from "../components/Spinner";
import { useMoviesList } from "../hooks/useMoviesList";

interface IHandlePageClick {
  selected: number
}

const Discover: NextPage = () => {
  const { movies, loading, totalPages, page, filter, updateFilter } = useMoviesList({})

  const handlePageClick = ({selected}: IHandlePageClick) => {
   updateFilter(filter?.with_genres, selected + 1)
   console.log(selected)
  }
  
  return (
    <div className="discover">
      <Head>
        <title>Discover</title>
      </Head>
      <Filter updateFilter={updateFilter}/>
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
        <div className="discover__loading">
          <Spinner/>
        </div>
      }
      <Paginate
        clickHandler={handlePageClick}
        totalPages={loading ? 0 : totalPages}
        isLoading={loading}
        page={page}
        />
    </div>
  );
};

export default Discover;
