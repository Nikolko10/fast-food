import React from 'react';
import ReactDOM from 'react-dom';
import { 
	createStore,
	applyMiddleware,
  	compose,
} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
// import Burgers from './store/reducers';
import { Provider } from 'react-redux'
import store from './store/reducers';
import { getData, setData } from './utils/data.js';
import data from './utils';
import registerServiceWorker from './registerServiceWorker';

if (getData() === null) {
	setData(JSON.stringify(data));
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
