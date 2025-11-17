import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <div className="nav-items container">
                <div className="logo">
                    <h1>My Anime Wiki</h1>
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Anime">Anime</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
)
}

export default Navbar