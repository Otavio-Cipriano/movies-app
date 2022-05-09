import { Link } from "react-router-dom"

import * as style from './Navbar.style'

export default function Navbar(){
    return (
        <style.Nav>
            <div className="logo">MarblesPrime</div>
            <ul >
                <li><Link to=''>Home</Link></li>
                <li><Link to="/discover">Discover</Link></li>
                <li>Movies</li>
                <li>TV and Shows</li>
            </ul>
        </style.Nav>
    )
}


