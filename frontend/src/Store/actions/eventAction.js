import { FETCH_EVENTS ,NEW_EVENT} from './types'
import store from '../index';

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
    })
    
        
}
export const createEvent = (data) => dispatch => {
    const {token}  = store.getState().auth
    console.log("Token",token);
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
              price
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
        type:NEW_EVENT ,
        payload : user.data.event
    }))
    .catch(err => {
        console.log(err)
    })
}