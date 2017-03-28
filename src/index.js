import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './appContainer.js';
import './index.css';
import createHistory from 'history/createBrowserHistory';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory();

const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
  })

const store = createStore(rootReducer, devTools, applyMiddleware(middleware))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
