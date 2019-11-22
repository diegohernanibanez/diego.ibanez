import {createStore, combineReducers} from 'redux';
import reducer from './reducers/reducer';

const rootreducers = combineReducers({
    reducer
});

const store = createStore(
    rootreducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;