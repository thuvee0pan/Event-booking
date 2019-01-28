import { combineReducers } from 'redux'
import postReducer from './postReducer'
import authReducer from './authReducer'
import eventReducer from './eventReducer'

export default combineReducers({
    posts: postReducer,
    auth: authReducer,
    events: eventReducer
})