import * as actionTypes from './action_types'

export function getPosts(posts){  
    console.log(posts)  
    return { type: actionTypes.GET_POSTS, posts:posts }
}

export function getPost(index){
    return { type:actionTypes.GET_POST, index }
}

export function addPost(post){
    return { type:actionTypes.ADD_POST, post }
}

export function removePost(index){
    return { type:actionTypes.REMOVE_POST, index }
}

export function fetchPosts() {
    return dispatch => {
      return fetch('http://localhost:1337/blogposts')
        .then(response => response.json())
        .then(json => dispatch(getPosts(json)))
    }
  }