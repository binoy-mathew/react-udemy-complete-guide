import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//combineReducers is a helper function in redux.
//create sections of the app. combine multiple reducers into a single reducer with the following key - value mapping.
const rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
