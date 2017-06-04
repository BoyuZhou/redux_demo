import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//这个包是限制在dispatch中改变state
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

function configureStoreProd(initialState) {
    const middlewares = [
        thunk
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
    ))
}

function configureStoreDev(initialState) {
    const middlewares = [
        reduxImmutableStateInvariant(),
        thunk
    ];

    //添加devtools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ))

    //热更新替换reducer
    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;