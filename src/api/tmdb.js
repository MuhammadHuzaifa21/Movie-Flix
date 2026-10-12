import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE = 'https://image.tmdb.org/t/p'

// Create a resuable axios instance with base config
const tmdb = axios.create({
    baseURL: BASE_URL,
    params: { api_key: apiKey },
})

// --- API Functions ---
export async function getPopularMovies() {
    const response = await tmdb.get('/movie/popular')
    return response.data.results
}

export async function getMovieById(id) {
    const response = await tmdb.get(`movie/${id}`)
    return response.data
}

// --- Image URL Helper ---
export function getPosterUrl(path, size = 'w500') {
    if (!path) return 'https://placehold.co/500x750/1a1a2e/ffffff?text=No+Poster'
    return `${IMAGE_BASE}/${size}${path}`
}

export function getBackdropUrl(path, size = 'original') {
    if (!path) return null
    return `${IMAGE_BASE}/${size}${path}`
}