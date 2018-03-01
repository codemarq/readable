import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><h1 className="light">Readable</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link active">About</Link>
            </li>
            <li className="nav-item active">
              <Link to="/posts" className="nav-link active">Posts</Link>
            </li>
            <li className="nav-item active">
              <Link to="/createPost" className="btn btn-success">+</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header