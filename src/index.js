import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootreducer} from './store/reducers';
import App from './components/main';

export const FNAME='FNAME';
export const SNAME='SNAME';


const store=createStore(rootreducer);
ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,document.getElementById('root'));

			
