import { FETCH_POST, NEW_POST } from '../actions/types'

const initialState = {
    blogPosts: [],
    blogPost: {}
}
export default function (state = initialState, action) {
    // console.log('reducing');

    switch (action.type) {
        
        case FETCH_POST:
            return {
                ...state,
                blogPosts : action.payload
            }
            
        case NEW_POST:
            return {
                ...state,
                blogPost : action.payload
            }
        default:
            return state
            
            
    }
}