import { FETCH_EVENTS , NEW_EVENT, BOOK_EVENT,FETCH_BOOKINGS,CANCEL_BOOKING} from '../actions/types'

const initialState = {
    events: [],
    bookings:[],
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
        case BOOK_EVENT:
            return state
        case FETCH_BOOKINGS:
            return {
                ...state,
                bookings: action.payload
            }
        case CANCEL_BOOKING: 
            return state     
            
        default:
            return state
            
    }
}