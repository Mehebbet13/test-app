import {createStore, combineReducers} from 'redux';
import {reducer} from "./text";


const rootReducers = combineReducers({
    text: reducer
});


const store = createStore(
    rootReducers,
);


export default store;