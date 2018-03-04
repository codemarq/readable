import * as types from '../actions/actionTypes'
import * as Api from '../api/backendApi'

export const loadPostsSuccess = (posts) => {
	return {
		type: types.LOAD_POSTS_SUCCESS,
		posts
	}
}

export const createPostSuccess = (post) => {
	return {
		type: types.CREATE_POST_SUCCESS,
		post
	}
}

export const loadPosts = () => {
	return (dispatch) => {
		return Api.getPosts().then(posts => {
			dispatch(loadPostsSuccess(posts))
		}).catch(error => {
			throw(error)
		})
	}
}
