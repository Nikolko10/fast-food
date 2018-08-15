import {createStore, combineReducers, applyMiddleware} from 'redux';
import burgers from './burgers.js';
import burger from './burger.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    burgers,
    burger,
});

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;