import React from 'react'
import { Link } from 'react-router-dom';
import imdbLogo from "../assets/imdb-logo.svg";



const Header = () => {
  return (
        <div className='bg-black cursor-pointer flex items-center py-4'>
            <Link to="/"><img src={imdbLogo} alt="IMDb"className="h-12"/></Link>
            <div className='text-white text-2xl '>
            <Link to='/movies/popular' className='px-4'>Popular</Link>
            <Link to='/movies/top_rated'className='px-4' >Top Rated</Link>
            <Link to='/movies/upcoming' className='px-4'>Upcoming</Link>
            </div>
        </div>
  )
}

export default Header