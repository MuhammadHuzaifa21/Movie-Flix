import React from 'react'
import { getPosterUrl } from '../api/tmdb'

function MovieCard({ movie }) {
  return (
    <>
      <div className='card h-100'>
        {/* TMDB 'image base URL' */}
        <img
          src={getPosterUrl(movie.poster_path)}
          className='card-img-top'
          alt={movie.title}
        />

        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{movie.title}</h5>
          <p className='card-text text-muted small'>
            ⭐ {movie.vote_average.toFixed(1)} / 10
          </p>
          <p className='card-text text-truncate'>{movie.overview}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard
