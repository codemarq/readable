import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class CommentContainer extends Component {
	render () {
		const { comments } = this.comments
		return (
			<div className="jumbotron">
				<CommentList />
			</div>
		)
	}
}

CommentContainer.propTypes = {
	comments: PropTypes.array.isRequired
}

export default CommentContainer