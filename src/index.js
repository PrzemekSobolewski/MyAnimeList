import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import animeListReducer from './redux/reducers/animeListReducer.js';
import animeReducer from './redux/reducers/animeReducer.js';

const reducers = combineReducers({
  animeList: animeListReducer,
  anime: animeReducer
});
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

