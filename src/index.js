import React from 'react';
import ReactDOM from 'react-dom';
import RootReducer from './core/RootReducer'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/index';
import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const store = createStore(RootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

  
