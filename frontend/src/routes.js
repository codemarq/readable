import React from 'react'
import { Route } from 'react-router-dom'
import Homepage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'

export default (
	<div>
		<Route exact path="/" component={HomePage}/>
		<Route path="/about" component={AboutPage}/>
	</div>
)