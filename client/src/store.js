import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducer from './reducers/reducer';
import reducerItinerary from './reducers/reducerItinerary';
import thunk from 'redux-thunk'

const rootreducers = combineReducers({
    reducer,
    reducerItinerary
});

const store = createStore(
    rootreducers,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;