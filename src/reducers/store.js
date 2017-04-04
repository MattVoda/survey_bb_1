import { createStore } from 'redux';
import rootReducer from  './index.js'; //index in Reducers folder, not main index

export default(initialState) => {
    return createStore(rootReducer, initialState);
}