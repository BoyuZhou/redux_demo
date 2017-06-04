import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {App, Dashbroad, UserManager, Reference, DataTable, MyEditor} from '../containers';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import React from 'react';
import configureStore from '../stores';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Dashbroad }/>
                <Route path="/usermanager" component={ UserManager }/>
                <Route path="/reference" component={ Reference }/>
                <Route path="/datatable" component={ DataTable }/>
                <Route path="/editor" component={ MyEditor }/>
            </Route>
        </Router>
    </Provider>

)
