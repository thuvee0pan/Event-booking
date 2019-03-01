import { FETCH_EVENTS ,NEW_EVENT, BOOK_EVENT,FETCH_BOOKINGS, CANCEL_BOOKING } from './types'
import store from '../index';
import {ToastsStore} from 'react-toasts';


export const fetchEvent = () => dispatch => {
   
    const quary = {
        query: `
        query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
        }
        `
    }
    
    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(quary),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('failed! ')
        }
        return res.json();
    })
        .then(user => dispatch({
        type: FETCH_EVENTS,
        payload : user.data.events
    }))
    .catch(err => {
        console.log(err)
        ToastsStore.error(err.toString())

    })
        
}
export const createEvent = (data) => dispatch => {
    const {token}  = store.getState().auth
    const quary = {
        query: `
        mutation {
            createEvent(EventInput:{
              title:"${data.title}",
              description : "${data.description}",
              price:${data.price},
              date:"${data.date}",
             
            }){
                _id
                title
                description
                date
                price
                creator {
                  _id
                  email
                }
            }
          }
        `
    }
    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(quary),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token

        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('failed! ')
        }
        
        return res.json();
        
    })
        .then(user => dispatch({
        
        type:NEW_EVENT,
            payload: user.data.event,
           
    }))
    .catch(err => {
        console.log(err)
        ToastsStore.error(err.toString())

    })
 
}
export const bookEvent = (data) => dispatch => {
    const {token}  = store.getState().auth
    const quary = {
        query: `
        mutation{
            bookEvent(eventId:"${data.id}"){
              _id
              createdAt
              updatedAt
            }
          }
        `
    }
    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(quary),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token

        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('failed! ')
        }
        
        return res.json();
        
    })
    .then(user => dispatch({
        
        type:BOOK_EVENT,
        payload: user.data.bookEvent,
           
    }))
    .catch(err => {
        console.log(err)
        ToastsStore.error(err.toString())

    })

}
export const fetchBookings = () => dispatch => {
    const {token}  = store.getState().auth

    const quary = {
        query: `
        query {
            bookings {
                _id
                event {
                    _id
                    title
                    date
                }
                createdAt
                updatedAt
            }
        }
        `
    }
    
    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(quary),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token

        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('failed! ')
        }
        return res.json();
    })
        .then(user => dispatch({
        type: FETCH_BOOKINGS,
        payload : user.data.bookings
    }))
    .catch(err => {
        console.log(err)
        ToastsStore.error(err.toString())

    })
        
}
export const cancelBooking = (data) => dispatch => {
    const {token}  = store.getState().auth

    const quary = {
        query: `
        mutation CancelBooking ($id: ID!){
            cancelBooking(bookingID: $id)
            {
              _id
              title
            }
          }
        `,
        variables: {
            id: data.id
        }
    }
    
    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(quary),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token

        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('failed! ')
        }
        return res.json();
    })
        .then(user => dispatch({
        type: CANCEL_BOOKING,
        payload : user.data.cancelBooking
    }))
    .catch(err => {
        console.log(err)
        ToastsStore.error(err.toString())

    })
}