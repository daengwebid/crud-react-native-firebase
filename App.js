/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

export default class App extends Component<{}> {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBeuKn8J8RNT5Pm0y_sNpBUkSimoV3tMTo',
      authDomain: 'manager-d492d.firebaseapp.com',
      databaseURL: 'https://manager-d492d.firebaseio.com',
      projectId: 'manager-d492d',
      storageBucket: '',
      messagingSenderId: '681362083397'
    };
    firebase.initializeApp(config);
  }

  render() { 
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
