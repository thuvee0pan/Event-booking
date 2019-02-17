import { FETCH_POST, NEW_POST } from './types'
// import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const fetchPosts = () => dispatch => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POST,
                payload : posts
            }))
            .catch (err => {
            console.log(err)
        });
}

export const newPost = (data) => dispatch => {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    )
        .then(res => res.json())
            .then(posts => dispatch({
                type: NEW_POST,
                payload : posts
            }))
            .catch (err => {
            console.log(err)
        });
    
}