import React from 'react'
import PropTypes from 'prop-types'
import CommentRow from './CommentRow'

const CommentList = ({comments}) => {
	return (
		<ul className="list-group">
			{comments.map(comment =>
				<CommentRow
					className="list-group-item"
					key={post.id}
					post={post} 
				/>
			)}
		</ul>
	)
}

CommentList.propTypes = {
	comments: PropTypes.array.isRequired
}

export default CommentList