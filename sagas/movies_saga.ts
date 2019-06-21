import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../src/actions';
import axios from 'axios';

export function* getBooks() {
    const response = yield axios.get('../data/movies.json');
    if(response.status === 200)
        yield put(actions.getAllBooksSuccess(response.data));
    else
        yield put(actions.getAllBooksFailure());
}

export function* getBooksSaga() {
    yield takeLatest(actions.GET_ALL_BOOKS_REQUEST, getBooks);
}