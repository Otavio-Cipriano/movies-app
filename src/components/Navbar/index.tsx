import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='nav container'>
        <div className="nav__logo">
            Movies
        </div>
        <div className="nav__links">
          <div  className='nav__link'><Link href="/discover">Discover</Link></div>
          <div  className='nav__link'><Link href="/">Movies</Link></div>
          <div  className='nav__link'><Link href="/">TV Shows</Link></div>
          <div  className='nav__link'><Link href="/">Favorites</Link></div>
        </div>
    </nav>
  )
}
