import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './appContainer';
import './index.css';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers.js';

// Create a history of your choosing (we're using a browser history in this case)cd
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(BrowserRouter);
const middleware = routerMiddleware(history);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }), devTools,
  applyMiddleware(middleware)
);
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))


// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
