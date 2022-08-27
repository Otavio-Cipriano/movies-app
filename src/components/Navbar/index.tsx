import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="nav__logo">
            Movies
        </div>
        <div className="nav__links">
            <Link className='nav__link' href="/discover">Browse</Link>
            <a className='nav__link' href="/a">Movies</a>
            <a className='nav__link' href="/a">Tv Shows</a>
            <a className='nav__link' href="/a">Favorites</a>
        </div>
    </nav>
  )
}
