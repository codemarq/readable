import * as actionTypes from './actionTypes'
import * as api from '../api/backendApi'

export const loadCommentsSuccess = (comments) => {
	return {
		type: actionTypes.LOAD_COMMENTS_SUCCESS,
		comments		
	}
}

export const loadComments = (comments) => {
	return (dispatch) => {
		return Api.getPosts().then(posts => {
			dispatch(loadPostsSuccess(posts))
		}).catch(error => {
			throw(error)
		})
	}
}