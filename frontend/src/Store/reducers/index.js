import { combineReducers } from 'redux'
import postReducer from './postReducer'
import authReducer from './authReducer'
import eventReducer from './eventReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    posts: postReducer,
    auth: authReducer,
    events: eventReducer,
    loadingBar: loadingBarReducer,

})