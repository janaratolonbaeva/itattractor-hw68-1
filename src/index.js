import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import reducer from "./store/reducer";
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

