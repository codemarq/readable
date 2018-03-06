import React from 'react'
import PostRow from './PostRow'
import PropTypes from 'prop-types'

const PostList = ({posts}) => {
	return (
		<ul className="list-group">
      {posts.map(post => 
				<PostRow 
					className="list-group-item" 
					key={post.id} 
					post={post} />)}
    </ul>
	)
}

PostList.propTypes = {
	posts: PropTypes.array.isRequired
}

export default PostList