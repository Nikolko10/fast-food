import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
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
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
