import { useEffect, useState } from "react"
import { getPopularMovies } from "../api/tmdb";

function Movies() {
    // STATES
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    // LOGIC
    // Fetch all movies
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
            <div className="container mt-4">
                <h1>All Movies</h1>
                {movies.length === 0
                    ? <p className="text-muted">No Movie Found.</p>
                    : movies.map((movie) => (
                        <p key={movie.id} className="text-muted">{movie.title}</p>
                    ))
                }
            </div>
        </>
    )
}

export default Movies
