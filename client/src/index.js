//when including non-JS files, we need to include the extension(.css)
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

//creating the redux store
const store=createStore(reducers,{},applyMiddleware(reduxThunk));

//hooking up the store to the react side of our application by placing the provider tag
//ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector('#root'));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
  );

/*
The Provider is a React Component that knows how to read changes from our redux store any
time the redux store gets some new states produced inside of it the provider will update
all children components with the new state 
*/
// console.log('STRIPE KEY IS ',process.env.REACT_APP_STRIPE_KEY);
// console.log('Environment is ',process.env.NODE_ENV);