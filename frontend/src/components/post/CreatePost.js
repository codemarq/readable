import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class CreatePost extends Component {
	render () {
		return (
			<form>
				<h2>Create New Post</h2>
				<div className="form-group">
					<label for="postTitleInput">Post Title</label>
					<input type="text" className="form-control" id="postTitleInput" placeholder="Post Title"/>
				</div>

				<div className="form-group">
					<label for="postBodyInput">Body</label>
					<textarea className="form-control" id="postBodyInput" placeholder="Write your post here..."/>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label for="postAuthorInput">Author</label>
						<input type="text" className="form-control" id="postAuthorInput" />
					</div>
					<div className="form-group col-md-6">
						<label for="categorySelect">Select a Category</label>
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