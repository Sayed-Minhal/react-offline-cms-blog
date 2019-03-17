import React from 'react';
import AppRouter from './Routes/routes'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux'
import { Provider} from "react-redux"

import boot from './Redux/Reducers/post_reducers'
import * as actions from './Redux/Actions/post_actions'

const store = createStore(boot,applyMiddleware(thunkMiddleware))

store.dispatch(actions.fetchPosts()).then(() => console.log(store.getState()))

const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe();

class App extends React.Component {
  constructor(props){
    super(props);
    window.setTimeout(()=>console.log(store.getState()),1400);

  }
  render() {
    return (
      <Provider store={store}><AppRouter /></Provider>
    )
  }
}
export default App;