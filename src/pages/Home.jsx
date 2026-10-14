import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { getPopularMovies } from '../api/tmdb'
import { Link } from 'react-router-dom';

function Home() {
    // STATES
    const [movies, setMovies] = useState([]);

    // LOGIC
    useEffect(() => {
        async function fetchMovies() {
            try {
                const results = await getPopularMovies()
                setMovies(results)
            } catch (error) {
                console.log('Error fetching movies:', error)
            }
        }
        fetchMovies()
    }, [])

    // UI
    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Discover Your Next Favorite Film"
                subtitle="Browse thousands of movies, filter by genre, and build your watchlist."
                buttonText="Browse Movies"
                buttonLink="/movies"
            />

            {/* Trending Movies */}
            <div className="container mt-5">
                <h2 className='text-center mb-4'>Trending Movies</h2>
                <div className='row g-4'>
                    {movies.length === 0
                        ? <p>No Movie Found.</p>
                        : movies.map((movie) => (
                            <div key={movie.id} className='col-12 col-sm-6 col-lg-4'>
                                <Link to={`/movie/${movie.id}`} className='text-decoration-none text-dark'>
                                    <MovieCard movie={movie} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home
