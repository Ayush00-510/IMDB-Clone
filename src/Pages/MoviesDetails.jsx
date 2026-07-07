import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviesDetails = () => {
  const [currentMovieDetail, setMoviesDetail] = useState()
  const { id } = useParams()

  useEffect(() => {
    getData()
    window.scrollTo(0, 0)
  }, [id])

  const getData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    const data = await res.json()
    setMoviesDetail(data)
  }

  return (
    <div className="bg-black text-white px-4 md:px-10 py-6">
      {/* Backdrop Image */}
      <div className="w-full h-[40vh] md:h-[60vh] mb-6 overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.backdrop_path || ""}`}
          alt="Backdrop"
        />
      </div>

      {/* Poster + Details + Links */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            className="w-64 h-[380px] object-cover rounded-lg shadow-lg"
            src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.poster_path || ""}`}
            alt={currentMovieDetail?.original_title}
          />
        </div>

        {/* Details + Synopsis + Links */}
        <div className="flex flex-col justify-between space-y-6 flex-1">
          {/* Title and Info */}
          <div>
            <h2 className="text-3xl font-bold">{currentMovieDetail?.original_title}</h2>
            <p className="italic text-gray-400">{currentMovieDetail?.tagline}</p>

            <div className="flex items-center gap-2 mt-2 text-yellow-400">
              <span className="text-xl">{currentMovieDetail?.vote_average}</span>
              <i className="fas fa-star" />
              <span className="text-sm text-gray-300">({currentMovieDetail?.vote_count} votes)</span>
            </div>

            <div className="mt-2 text-sm text-gray-400">
              <p><strong>Runtime:</strong> {currentMovieDetail?.runtime} mins</p>
              <p><strong>Release Date:</strong> {currentMovieDetail?.release_date}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {currentMovieDetail?.genres?.map(genre => (
                <span key={genre.id} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <h3 className="text-xl font-semibold">Synopsis</h3>
            <p className="text-gray-300 mt-2">{currentMovieDetail?.overview}</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Useful Links</h3>
            <div className="flex flex-wrap gap-4">
              {currentMovieDetail?.homepage && (
                <a
                  href={currentMovieDetail.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition"
                >
                  <i className="fas fa-link"></i>
                  Homepage
                </a>
              )}
              {currentMovieDetail?.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-medium px-4 py-2 rounded transition"
                >
                  <i className="fab fa-imdb text-lg"></i>
                  IMDb Page
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Production Companies */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Production Companies</h3>
        <div className="flex flex-wrap gap-6">
          {currentMovieDetail?.production_companies?.map(company => (
            company.logo_path && (
              <div key={company.id} className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg shadow-md">
                <img
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                  className="w-16 h-auto object-contain"
                  alt={company.name}
                />
                <span className="text-sm text-gray-300">{company.name}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoviesDetails