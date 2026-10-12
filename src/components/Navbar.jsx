import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className='navbar-brand' to='/'>🎬 MovieFlix</Link>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/movies'>Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/watchlist'>
                                Watchlist
                                <span className="badge bg-primary mx-1">0</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
