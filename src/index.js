import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Provider lets connect method get access to state anywhere in app where {} is wrapped
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes';
//browserHisty allows users to move forward and back
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
//middleware helps control what goes to reducers
const middleware = [thunk];
//applyMiddleware takes in functions... checks for actions before it hits store
const createStoreWithMiddleware = applyMiddleware(...middleware) (createStore);

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store ={store} >
    <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
  );


registerServiceWorker();
