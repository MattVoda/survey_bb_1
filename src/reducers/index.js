import { pageChanged, addQResponse } from './Reducers_ALL';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    pageChanged,
    addQResponse
});

export default rootReducer;