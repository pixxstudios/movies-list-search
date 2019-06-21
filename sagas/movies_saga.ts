import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../src/actions';
import axios from 'axios';

export function* getMovies() {
    const response = yield axios.get('../data/movies.json');
    if(response.status === 200)
        yield put(actions.getAllMoviesSuccess(response.data));
    else
        yield put(actions.getAllMoviesFailure());
}

export function* getMoviesSaga() {
    yield takeLatest(actions.GET_ALL_MOVIES_REQUEST, getMovies);
}