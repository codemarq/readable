import React, { Component } from 'react'
import serializeForm from 'form-serialize'
// import PropTypes from 'prop-types'

class CreatePost extends Component {
	formSubmit (e) {
		e.preventDefault()
		const values = serializeForm(e.target, { hash: true })
		// if (this.props.onCreatePost) {
		// 	this.props.onCreatePost(values)
		// }
	}
	render () {
		return (
			<form onSubmit={this.formSubmit}>
				<h2>Create New Post</h2>
				<div className="form-group">
					<label htmlFor="postTitleInput">Post Title</label>
					<input type="text" className="form-control" id="postTitleInput" placeholder="Post Title"/>
				</div>

				<div className="form-group">
					<label htmlFor="postBodyInput">Body</label>
					<textarea className="form-control" id="postBodyInput" placeholder="Write your post here..."/>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="postAuthorInput">By</label>
						<input type="text" className="form-control" id="postAuthorInput" placeholder="Any name will do..."/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="categorySelect">Select a Category</label>
						<select className="form-control" id="categorySelect">
							<option>react</option>
							<option>redux</option>
							<option>udacity</option>
						</select>
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

// CreatePost.propTypes = {
// 	return {
		
// 	}
// }
export default CreatePost