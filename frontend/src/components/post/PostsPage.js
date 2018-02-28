import React from 'react'
import PostList from './PostsList'

const initialPostState = [
	{
		id: "testPost1",
		timestamp: Date.now(),
		title: "PostTitle # 1",
		body: `I am a string. i represent the body of Post. i am just dummy data and should never be seen in production. All of your base are belong to us`,
		author: 'Captain Dirty',
		category: 'udacity',
		voteScore: 5,
		deleted: false
	},
	{
		id: "testPost2",
		timestamp: Date.now(),
		title: "PostTitle # 2",
		body: `I am a post #2 Body! i am just dummy data and should never be seen in production. All of your base are belong to us`,
		author: 'Captain Dirty',
		category: 'react',
		voteScore: 1,
		deleted: false
	},
	{
		id: "testPost3",
		timestamp: Date.now(),
		title: "PostTitle # 3-the deleted one",
		body: `I am a supposed to be a deleted post. All of your base are belong to us`,
		author: 'Captain Dirty',
		category: 'Udacity',
		voteScore: 3,
		deleted: false
	}
]

const PostsPage = () => {

		return (
			<div className="jumbotron">
				<PostList posts={initialPostState}/>
			</div>
		)
	}

export default PostsPage