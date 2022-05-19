import Card from "../components/Card";
import MoviesArticle from "../components/MovieArticle";


import useFetchTrend from "../hooks/useFetchTrend";

export default function Home() {
  const { trends } = useFetchTrend("movie", "week");

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesArticle movies={trends?.results}/>
    </div>
  );
}
