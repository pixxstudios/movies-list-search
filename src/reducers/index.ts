import { combineReducers } from 'redux';
import * as actions from '../actions/index';

const defaultState = [
    {
        "authors":[],
        "categories":[],
        "title": null,
        "description": null,
        "image": null,
        "price": null
    }
];

const booksReducer = (state = defaultState, action) => {
    switch(action.type){
        case actions.GET_ALL_BOOKS: {
            return {}
        }

        default: {
            return state;
        }
    }
};

export default combineReducers({
    books: booksReducer
});