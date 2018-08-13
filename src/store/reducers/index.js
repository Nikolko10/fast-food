import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import Burgers from './burgers.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    burgers: Burgers,
});

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;