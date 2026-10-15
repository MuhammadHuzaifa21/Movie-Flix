import { useEffect, useState } from "react"
import { getGenres, getPopularMovies } from "../api/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Movies() {
    // --- STATES ---
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    // --- LOGIC ---

    // Fetch List of Movies
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

    // Fetch List of Genres
    useEffect(() => {
        async function fetchGenres() {
            try {
                const results = await getGenres()
                setGenres(results)
            } catch (error) {
                console.log('Error fetching genres:', error)
            }
        }
        fetchGenres()
    }, [])

    // Filter (Movie - Genre)
    const filteredMovies = movies
        .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
        .filter((movie) => selectedGenre === '' || movie.genre_ids.includes(Number(selectedGenre)))

    // UI
    return (
        <>
            <div className="container mt-4 text-center">
                <h1 className="mb-4">All Movies</h1>

                {/* Filters */}
                <div className="row mb-4 g-3">
                    {/* Movie search bar */}
                    <div className="col-12 col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Movies..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    {/* Genre Drop down */}
                    <div className="col-12 col-md-4">
                        <select
                            className="form-select"
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                        >
                            <option value="">All Genres</option>
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.id}> {genre.name} </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Count */}
                <p className="text-muted">{filteredMovies.length} Movies</p>

                {/* List of Movies */}
                {filteredMovies.length === 0 ? (
                    <div className="text-center py-5">
                        <h4>No movies match your search</h4>
                        <p className="text-muted">Try a different title or genre.</p>
                    </div>
                ) : (
                    <div className="row g-4">
                        {filteredMovies.map((movie) => (
                            <div key={movie.id} className="col-12 col-sm-6 col-lg-3">
                                <Link to={`/movie/${movie.id}`} className="text-decoration-none text-dark">
                                    <MovieCard movie={movie} />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Movies
