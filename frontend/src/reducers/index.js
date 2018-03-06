import { combineReducers } from 'redux'
import posts from './postReducer'
import comments from './commentReducer'

const rootReducer = combineReducers({
  posts,
  comments
})

export default rootReducer