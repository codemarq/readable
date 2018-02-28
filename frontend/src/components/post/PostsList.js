import React from 'react'
import PostRow from './PostRow'

const PostList = ({posts}) => {
	return (
		<ul className="list-group">
      {posts.map(post => <PostRow className="list-group-item" key={post.id} post={post} />)}
    </ul>
	)
}

export default PostList