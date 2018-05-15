import * as types from '../actions/actionTypes'
import * as Api from '../api/backendApi'

export function loadPostsSuccess (posts) {
	return {
		type: types.LOAD_POSTS_SUCCESS,
		posts
	}
}

export function createPostSuccess (post) {
	return {
		type: types.CREATE_POST_SUCCESS,
		post
	}
}

export function loadPosts () {
	return (dispatch) => {
		return Api.getPosts().then(posts => {
			dispatch(loadPostsSuccess(posts))
		}).catch(error => {
			throw(error)
		})
	}
}
