import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';


const Card = ({ele}) => {

    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        }, 1500);
    },[])

  return (

    isLoading
    ?
    <div>
    <SkeletonTheme color="#202020" highlightColor='#444'>
        <Skeleton height={300} duration={2}/>
    </SkeletonTheme>
    </div>
    :
    <div >
      <Link to={`/movie/${ele.id}`} className='text-white'>

        <div className='cards inline-block top-0 left-0 rounded-2xl hover:scale-125 transition-transform duration-300 relative ease-in-out hover:z-50 gap-0.5'>
          <img className='card_img h-[300px] w-full object-cover rounded-xl' src={`https://image.tmdb.org/t/p/original${ele? ele.poster_path:""}`}></img>
          <div className='card_overlay absolute opacity-0 bottom-0 left-0 w-full bg-black/90 text-white p-3 rounded-b-xl hover:opacity-100 transition-opacity-100 duration-300'>
            <div className='card_title text-sm font-bold truncate'>{ele ? ele.original_title:""}</div>
              <div className='card_runtime flex justify-between text-xs my-1'>
                <span>{ele ? ele.release_date  : ""}</span>
                <span className='card_rating flex items-center gap-1'>{ele? ele.vote_average.toFixed(1):""}<i className='fas fa-star text-yellow-400'/></span>
              </div>
              <div className='card_description text-xs leading-snug line-clamp-4'>{ele? ele.overview.slice(0,120)+"..." : ""}</div>
          </div>
        </div>
 
      </Link>  
    </div>
  )
}

export default Card