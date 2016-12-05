import { applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducer';
// import data from './data'
var initState = {
 	people : []
  }
const store = createStore(rootReducer,initState, applyMiddleware(thunk));

store.subscribe(()=>{
 // console.log('change', store.getState())
})

export const history = syncHistoryWithStore(browserHistory, store);

// if(module.hot) {
//   module.hot.accept('./reducer',() => {
//     const nextRootReducer = require('./reducer').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
