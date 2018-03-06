import * as actionTypes from './actionTypes'
import * as Api from '../api/backendApi'

export const loadCommentsSuccess = (comments) => {
	return {
		type: actionTypes.LOAD_COMMENTS_SUCCESS,
		comments		
	}
}

export const loadComments = (postId) => {
	
	return (dispatch) => {
		return Api.getCommentsByPostId(postId).then(comments => {
			dispatch(loadCommentsSuccess(comments))
		}).catch(error => {
			throw(error)
		})
	}
}