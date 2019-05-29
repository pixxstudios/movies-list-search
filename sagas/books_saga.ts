import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_BOOKS } from '../src/actions';
import axios from 'axios';

export function* getBooks() {
    console.log("hello saga");
    yield axios.get('http://localhost:4444/books', {});
}

export function* getBooksSaga() {
    yield takeLatest(GET_ALL_BOOKS, getBooks);
}