import * as actionTypes from '../Actions/action_types'

const initialState = {
    posts: []
  }

export default function boot(state=initialState, action) {
    
    switch (action.type) {
        case actionTypes.GET_POSTS:
        console.log(action);
            return Object.assign({}, state, { 
                posts:state.posts.concat(action.posts)
            })

        case actionTypes.GET_POST:
            console.log(action);
                return Object.assign({}, state, { 
                    posts: state.posts,
                    selected:state.posts[action.index-1]
                })
          
        
        case actionTypes.ADD_POST:
          return Object.assign({}, state, {
            posts: [
              ...state.posts,
              action.post
            ]
          })
          

        case actionTypes.REMOVE_POST:
          return Object.assign({}, state, {
            posts: (()=>state.posts.filter((item, index) => index !== action.index-1))()
          })
        
        default:
          return state
      }
  }