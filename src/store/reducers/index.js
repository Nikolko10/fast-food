import {createStore, combineReducers, applyMiddleware} from 'redux';
import Burgers from './burgers.js';
import Burger from './burger.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    burgers: Burgers,
    burger: Burger,
});

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;