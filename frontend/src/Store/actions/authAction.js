import { SIGNUP, LOGIN , LOGOUT} from './types'

export const login = (data) => dispatch => {
   

    const quary = {
        query: `
        query {
            login(
                email:"${data.email}",
                password:"${data.password}"
            ){
                userID
                token
                tokenExpiration
            }
        }
        `
    }
    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(quary),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('Sign in failed! ')
        }
        return res.json();
    })
        .then(user => dispatch({
        type: LOGIN,
        payload : user.data.login
    }))
    .catch(err => {
        console.log(err)
    })
    
        
}

export const signup = (data) => dispatch => {
    const quary = {
        query: `
        mutation {
            createUser(UserCreate: {
                email:"${data.email}",
                name:"${data.name}",
                password:"${data.password}"
            }){
                _id
                email
            }
        }
        `
    }
    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(quary),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('Sign up failed! ')
        }
        return res.json();
    })
    .then(user => dispatch({
        type: SIGNUP,
        payload : user
    })) 
    .catch(err => {
        console.log(err)
    })
}
export const logout = () => dispatch => {
    dispatch({
        type:LOGOUT
    })
}
    
