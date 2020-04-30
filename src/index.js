import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import Cartreducer from './reducers/cartreducer';
import Chatreducer from "./reducers/chatreducer";
import {composeWithDevTools} from 'redux-devtools-extension';


const masterreducer =combineReducers({
    cart:Cartreducer,
    chat:Chatreducer
})
const store=createStore(masterreducer,composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById('root') );
   


