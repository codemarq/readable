import React from 'react'
import { Link } from 'react-router-dom'
import CategoryNav from './CategoryNav'

const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="navbar container navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand col-md-6 " to="/"><h1 className="light">Readable</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <CategoryNav />
      </nav>
    </header>
  )
}

export default Header