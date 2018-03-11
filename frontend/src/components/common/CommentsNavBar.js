import React from 'react'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import FaComment from 'react-icons/lib/fa/comment'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const CommentsNavBar = () => {
	return (
		<nav>
			<Link to="/comment" >Add a Comment <FaPlusCircle /></Link>
			<button className="btn btn-primary"><FaComment/> View Comments</button>
		</nav>
	)
}

// CommentsNavBar.propTypes = {
// 	return{
		
// 	}
// }

export default CommentsNavBar