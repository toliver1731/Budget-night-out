import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Provider lets connect method get access to state anywhere in app where {} is wrapped
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware) (createStore);

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store ={store} >
    <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
  );


registerServiceWorker();
