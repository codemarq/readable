import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PostRow = ({post}) => {
	return (
		<div class="card">
			<h6 class="card-header text-right">{post.author} at {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</h6>
			<div class="card-body">
				<h5 class="card-title">{post.title}</h5>
				<p class="card-text">{post.body}</p>
				<Link to="/comment" class="btn btn-primary">Comment</Link>
			</div>
		</div>
	)
}

export default PostRow