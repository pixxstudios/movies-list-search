import { combineReducers } from 'redux';
import * as actions from '../actions/index';

/* const defaultState = [
    {
        "authors":[],
        "categories":[],
        "title": null,
        "description": null,
        "image": null,
        "price": null
    }
]; */

const defaultState = {
    isLoading: true
};

const booksReducer = (state = defaultState, action) => {
    switch(action.type){
        case actions.GET_ALL_BOOKS_REQUEST: {
            return { ...state, isLoading: true}
        }
        case actions.GET_ALL_BOOKS_SUCCESS: {
            return { ...state, booksList: action.booksList, isLoading: false }
        }

        default: {
            return state;
        }
    }
};

export default combineReducers({
    books: booksReducer
});