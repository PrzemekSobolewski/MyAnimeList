import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import animeListReducer from './redux/reducers/animeListReducer.js';

const reducers = combineReducers({
  animeList: animeListReducer
});
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

