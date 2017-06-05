import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="fuel-savings" component={FuelSavingsPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>

);
