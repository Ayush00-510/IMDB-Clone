import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom'


const MoviesList = () => {

  const [movieList, setMovieList] = useState([])
  const{type} = useParams();

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    getData()
  },[])

  useEffect(() => {
    getData()
  },[type])



  const getData = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${API_KEY}&language=en-US`)
    const data = await res.json();
    setMovieList(data.results); 
  }
  
      
      return (
        <div>
        <h2 className="text-white text-3xl font-bold mb-4 capitalize pl-4 border-l-4 border-yellow-400 px-4" >
        {type ? type.replace("_", " ") : "Popular"}</h2>
        <div className='list_card grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 p-4 '>
        {
          movieList.map( (ele) => {
            return <Card key={ele.id} ele={ele}/>
})
            }
            </div>
            </div>
            )
}
            
export default MoviesList