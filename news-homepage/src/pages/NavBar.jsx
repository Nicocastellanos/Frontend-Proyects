import React from 'react'
import {Link} from 'react-router-dom';
import '../Css/Home.css'

export default function NavBar() {
  return (
    <nav className='nav-bar'>
        <Link to="/"><img src="./src/assets/images/logo.svg" alt="" /></Link>
        <div className='nav-links'>
          <p><Link to="/" className='link-nav'>Home</Link></p>
          <p><Link to="/news" className='link-nav'>New</Link></p>
          <p><Link to="/popular" className='link-nav'>Popular</Link></p>
          <p><Link to="/trending" className='link-nav'>Trending</Link></p>
          <p><Link to="/categories" className='link-nav'>Categories</Link></p>
        </div>
    </nav>
  )
}
