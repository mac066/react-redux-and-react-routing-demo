import React from 'react'
import { render } from 'react-dom'
import { Provider  } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store , {history} from './store'
import App from './components/app'
// import main from './components/main'
import Home from './components/home'
import SelectedDevice from './components/selectedDevice'

const router = (
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
      	<Route path="/about" component={SelectedDevice}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));



// function reducer(state=0,action){
//  if(action.type === "inc"){
//    return state + action.data
//  }
//  return state;
// }

// var testStore = createStore(reducer)

// testStore.subscribe(()=>{
//  console.log('change', testStore.getState())
// })

// testStore.dispatch({type:'inc',data:1})
// testStore.dispatch({type:'inc',data:3})
