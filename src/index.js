import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {Provider} from 'react-redux';
import rootReducer from './reducers'; //is this enough specificity?
import {createStore} from 'redux';
//for TESTING
import {pageForward, pageBackward, qResponsed} from './actions/Actions_ALL';

//import Store from './reducers/store';
//const StoreInstance = Store();

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// TESTING
// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(pageForward(1)); //should yield 2
store.dispatch(pageForward(2)); //=3
store.dispatch(pageBackward(3)); //=2

// Stop listening to state updates
unsubscribe();
