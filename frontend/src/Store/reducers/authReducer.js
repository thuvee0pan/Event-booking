import { SIGNUP, LOGIN, LOGOUT } from '../actions/types'

const initialState = {
    userID: '',
    token: '',
    tokenExp: '',
    status:'',
}
export default function (state = initialState, action) {


    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userID: action.payload.userID,
                token: action.payload.token,
                tokenExp:action.payload.tokenExpiration
            }
            
        case SIGNUP:
            return {
                
            }
        case LOGOUT: 
            return {
                ...state,
                userID: null,
                token:null,
                tokenExp:null
            }
          
        default:
            return state
            
    }
}