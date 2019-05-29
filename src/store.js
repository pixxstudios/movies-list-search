import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducers'
import { getBooksSaga } from '../sagas/books_saga';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = createStore(
    combineReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(getBooksSaga);

export default store;