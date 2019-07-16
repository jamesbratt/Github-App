import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

const window2: any = window;

const composeEnhancer = window2.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunkMiddleware),
  ),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

