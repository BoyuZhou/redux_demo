import { combineReducers } from 'redux';
import user from './userReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    user,
    routing: routerReducer
});

export default rootReducer;