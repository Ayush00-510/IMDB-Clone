import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';
import MoviesList from '../Component/MoviesList';

const Home = () => {
    const [popularmovies, setpopularmovies] = useState([])

    
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
            const data = await res.json();
            setpopularmovies(data.results);
            console.log(data.results);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='relative'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={500}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularmovies.map((ele, index) => (
                        <Link to={`/movie/${ele.id}`} key={index} className="relative block">
                            {/* Image */}
                            <div className='w-full h-[36rem] overflow-hidden'>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`}
                                    alt={ele.original_title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
{/* Netflix-style Overlay Text Box */}
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 sm:px-16 py-8 text-white flex flex-col justify-end h-full">
    <div className="max-w-2xl space-y-4">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md text-start">
            {ele?.original_title}
        </h2>

        {/* Metadata badges */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-200">
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-md backdrop-blur-sm">
                {ele?.release_date}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-400/20 rounded-md">
                <i className="fas fa-star" />
                {ele?.vote_average.toFixed(1)}
            </span>
        </div>

        {/* Overview */}
        <p className="text-sm sm:text-base text-gray-100 line-clamp-2 leading-relaxed drop-shadow-sm text-start">
            {ele?.overview}
        </p>

        {/* CTA Buttons (optional) */}
        <div className="flex gap-4 pt-2">
            <button className="bg-white text-black px-7 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
                 Play
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-md border border-white/30 hover:bg-white/30 transition">
                 More Info
            </button>
        </div>
    </div>
</div>

                        </Link>
                    ))}
                </Carousel>
                <MoviesList/>

            </div>
        </>
    );
};

export default Home;
