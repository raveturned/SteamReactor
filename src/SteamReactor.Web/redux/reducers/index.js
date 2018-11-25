import { combineReducers } from 'redux';
import apiList from './apiList';
import explorer from './explorer';

const rootReducer = combineReducers({
    apiList,
    explorer,
});

export default rootReducer;
