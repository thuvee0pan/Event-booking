import { FETCH_EVENTS , NEW_EVENT} from '../actions/types'

const initialState = {
    events: [],
    event:null
}
export default function (state = initialState, action) {
  

    switch (action.type) {
        case FETCH_EVENTS:
            return {
                ...state,
                events : action.payload
            }
         case NEW_EVENT:
            return {
                ...state,
                event:action.payload
                // events: [
                //     ...state.events,
                //     action.payload
                // ]
            }
        default:
            return state
            
    }
}