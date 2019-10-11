import React from 'react';
import ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//小邹今天没有打卡（10月10号）
