import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Movies from "./pages/Movies"
import Watchlist from "./pages/Watchlist"
import MovieDetails from "./pages/MovieDetails"

function App() {

  return (
    <>
      {/* BROWSER ROUTER */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  )
}

export default App
