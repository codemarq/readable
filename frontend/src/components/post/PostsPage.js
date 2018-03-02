import React, { Component } from 'react'
import PostList from './PostsList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class PostsPage extends Component {
	
	render () {
		const {posts} = this.props
		return (
			<div className="jumbotron">
				<h2 className="page-title">Posts</h2>
				<PostList posts={posts}/>
			</div>
		)
	}
}

PostsPage.propTypes = {
	posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}
export default connect(mapStateToProps)(PostsPage)