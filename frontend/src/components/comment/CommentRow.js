import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import PropTypes from 'prop-types'

const CommentRow = () => {
	return (
		<div className="card">
			<h6 className="card-header"><strong>{comment.author}</strong> at <em>{moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</em></h6>
			<div className="card-body">
				<h5 className="card-title">{comment.title}</h5>
				<p className="card-text">{comment.body}</p>
				<Link to="/" className="btn btn-primary">back</Link>
			</div>
		</div>
	)
}

CommentRow.propTypes = {
	comment: PropTypes.object.isRequired
}

export default CommentRow