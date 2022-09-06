import { TbArrowsDownUp } from 'react-icons/tb'
import useGenreList from '../../hooks/useGenreList'

export default function Filter() {
  const {} = useGenreList()

  return (
    <div className="filter">
      <span>filter</span>
      <div className="filter__group">
        <select>
          <option value="">Genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
        </select>
      </div>
    </div>
  )
}
