import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import PostsPage from './components/post/PostsPage'

export default (
	<div>
		<Route exact path="/" component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/posts" component={PostsPage} />
	</div>
)