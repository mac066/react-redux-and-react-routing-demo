import React from 'react'
import { render } from 'react-dom'
import { Provider  } from 'react-redux'
import { Router, Route } from 'react-router'
// import { createStore } from 'redux'
import store , {history} from './store'
import profile from './components/profile'
import profileDetails from './components/profile_details'
import App from './components/app'
// import main from './components/main'
// import BodyContainer from './components/BodyContainer'



const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})


const router = (
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
      	<Route path="/about" component={About}></Route>
      	<Route path="/inbox" component={Inbox}></Route>
      	<Route path="/profile" component={profile}>
      		<Route path="/detail" component={profileDetails}></Route>
      	</Route>


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
