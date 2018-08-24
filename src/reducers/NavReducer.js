import { combineReducers } from 'redux';
import { RootNavigator } from '../components/AppNavigator';


const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const initialNavState = RootNavigator.router.getStateForAction(firstAction);

const NavReducer = (state = initialNavState, action) => {
    switch (action.type) {
        default:
            return RootNavigator.router.getStateForAction(action, state);
            break;
    }

};

export default NavReducer;