import React from 'react'
import { Link } from 'react-router-dom'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
// import PropTypes from 'prop-types'

const CategoryDropDown = () => {
	return (
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
			</ul>
		</div>
	)
}

// CategoryDropDown.propTypes = {
// 	return {
		
// 	}
// }

export default CategoryDropDown