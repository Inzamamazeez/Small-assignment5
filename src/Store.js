import {createStore, combineReducers } from 'redux';
import postReducer from './Reducers/PostReducers';
import userReducer from './Reducers/UserReducers';

const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
})

const store = createStore(rootReducer);

export default store;