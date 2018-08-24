import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import TestReducer from './TestReducer';


const AppReducer = combineReducers({
    nav: NavReducer,
    data: TestReducer,
});

export default AppReducer;