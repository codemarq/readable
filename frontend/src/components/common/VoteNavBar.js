import React from 'react'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'

// import PropTypes from 'prop-types'

const VoteNavBar = () => {
	return (
		<nav>
			<button className="btn btn-primary"><FaThumbsUp/>  Like</button>
			<button className="btn btn-primary"><FaThumbsDown/></button>		
		</nav>
	)
}

// VoteNavBar.propTypes = {
// 	return{
		
// 	}
// }

export default VoteNavBar