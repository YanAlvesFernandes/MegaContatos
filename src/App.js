import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native'
import { createStore, applyMiddleware } from 'redux';
//import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount() {
  const firebase = require("firebase");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBXfhP7rRTCzMCfub5S8JPuCUJR6PL5Bc",
    authDomain: "manager-95f2d.firebaseapp.com",
    databaseURL: "https://manager-95f2d.firebaseio.com",
    projectId: "manager-95f2d",
    storageBucket: "",
    messagingSenderId: "144023357176"
    };
  firebase.initializeApp(config);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
