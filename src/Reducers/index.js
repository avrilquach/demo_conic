import { combineReducers } from 'redux';
import openMenu from './open';
import permision from './permision';

const todoApp = combineReducers({
    openMenu,
    permision
})

export default todoApp;