import { TbArrowsDownUp } from 'react-icons/tb'
import useGenreList from '../../hooks/useGenreList'

interface IFilter{
  updateFilter: any,
}

export default function Filter({updateFilter}: IFilter) {
  const {genres, loading} = useGenreList()

  const onChange = (e: any) => {
    updateFilter(e.target.value, 1)
  }

  return (
    <div className="filter">
      <span>filter</span>

      <div className="filter__group">
        <select className='filter__select' onChange={onChange}>
          <option value="">Genre</option>
          {
            genres?.map((genre, idx) =>{
              return (
                <option value={genre.id} key={idx}>{genre.name}</option>
              )
            })
          }
        </select>
      </div>

      <div className="filter__group">

      </div>

    </div>
  )
}
