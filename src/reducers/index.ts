import { combineReducers } from 'redux';
import * as actions from '../actions/index';

const defaultState = {
    isLoading: true,
    moviesList: []
};

const moviesReducer = (state = defaultState, action) => {
    switch(action.type){
        case actions.GET_ALL_MOVIES_REQUEST: {
            return { ...state, isLoading: true}
        }
        case actions.GET_ALL_MOVIES_SUCCESS: {
            return { ...state, moviesList: action.moviesList, isLoading: false }
        }

        default: {
            return state;
        }
    }
};

export default combineReducers({
    movies: moviesReducer
});