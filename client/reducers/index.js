import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'

// there can be only one ⚔
// router reducer matches browserHistory to state
const rootReducer = combineReducers({
  posts, 
  comments,
  routing: routerReducer
})

export default rootReducer