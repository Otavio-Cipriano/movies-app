import { useState } from "react";
import { TbArrowsDownUp } from "react-icons/tb";
import useGenreList from "../../hooks/useGenreList";
import OrderBy from "../../interfaces/orderBy";
import SortBy from "../../interfaces/sortBy";

interface IFilter {
  updateFilter: any;
}

export default function Filter({ updateFilter }: IFilter) {
  const { genres, loading } = useGenreList();

  const [genre, setGenre] = useState<string>()
  const [sortBy, setSortBy] = useState<string>()
  const [orderBy, setOrderBy] = useState<string>('asc')

  const onChangeGenre = (e: any) => {
    setGenre(e.target.value)
    updateFilter(e.target.value, 1, sortBy, orderBy);
  };

  const onChangeSort = (e: any) => {
    setSortBy(e.target.value)
    updateFilter(genre, 1, e.target.value);
  };

  const onChangeOrder = (e: any) => {
    setOrderBy(e.target.value)
    updateFilter(genre, 1, sortBy,  e.target.value);
  };

  return (
    <div className="filter">
      <span>filter</span>

      <div className="filter__group">
        <select className="filter__select" onChange={onChangeGenre} value={genre}>
          <option value="">Genre</option>
          {genres?.map((genre, idx) => {
            return (
              <option value={genre.id} key={idx}>
                {genre.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="filter__group">
        <select className="filter__select" onChange={onChangeSort}>
          <option value={''}>Sort by</option>
          <option value={SortBy.popularityDesc}>Popularity Descending</option>
          <option value={SortBy.popularityAsc}>Popularity Ascending</option>
          <option value={SortBy.revenueDesc}>Revenue Descending</option>
          <option value={SortBy.revenueAsc}>Revenue Ascending</option>
          <option value={SortBy.originalTitleAsc}>title (A-Z)</option>
          <option value={SortBy.originalTitleDesc}>title (Z-A)</option>
          <option value={SortBy.voteCountDesc}>vote count Descending</option>
          <option value={SortBy.voteCountAsc}>vote count Ascending</option>
          <option value={SortBy.voteAverageDesc}>vote avereage Descending</option>
          <option value={SortBy.voteAverageAsc}>vote avereage Ascending</option>
        </select>
      </div>
    </div>
  );
}
