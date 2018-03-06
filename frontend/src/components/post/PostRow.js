import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import PropTypes from 'prop-types'

const PostRow = ({post}) => {
	return (
		<div className="card">
			<h6 className="card-header"><strong>{post.author}</strong> at <em>{moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</em></h6>
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<p className="card-text">{post.body}</p>
				<Link to="/comment" className="btn btn-primary">Comment</Link>
			</div>
		</div>
	)
}

PostRow.propTypes = {
	post: PropTypes.object.isRequired
}

export default PostRow