import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getMovieById, getPosterUrl } from "../api/tmdb";

function MovieDetails() {
  // STATE
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  // LOGIC
  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(id)
        setMovie(data)
      } catch (error) {
        console.log('Error fetching movie details:', error)
      }
    }
    fetchMovie()
  }, [id])

  if (!movie) {
    return (
      <div className="container mt-4">
        <p>Loading movie...</p>
      </div>
    )
  }

  // UI
  return (
    <>
      <div className="container mt-5">
        <Link to='/movies' className="btn btn-outline-secondary mb-3">
          ← Back to Movies
        </Link>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img
              src={getPosterUrl(movie.poster_path)}
              alt={movie.title}
              className="img-fluid rounder shadow-sm" />
          </div>

          <div className="col-12 col-md-8">
            <h1>{movie.title}</h1>
            {movie.tagline && (
              <p className="text-muted fst-italic">{movie.tagline}</p>
            )}

            <div className="mb-3">
              {movie.genres.map(genre => (
                
                <span key={genre.id} className="badge bg-secondary me-1">
                  {genre.name}
                </span>

              ))}
            </div>

            <p>
              ⭐ <strong>{movie.vote_average.toFixed(1)}</strong> / 10
              {' . '}
              {movie.runtime} min
              {' . '}
              {movie.release_date.slice(0, 4)}
            </p>

            <p className="lead">{movie.overview}</p>

            <button className="btn btn-primary btn-lg mt-3">
              + Add to Watchlist
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
