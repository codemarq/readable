import React from 'react'
import { Link } from 'react-router-dom'
// import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import CategoryDropDown from './CategoryDropDown'

const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="navbar container navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><h1 className="light">Readable</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <CategoryDropDown/>
      </nav>
    </header>
  )
}

export default Header