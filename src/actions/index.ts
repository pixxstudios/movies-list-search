export const GET_ALL_BOOKS_REQUEST = 'GET_ALL_BOOKS_REQUEST';
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS';
export const GET_ALL_BOOKS_FAILURE = 'GET_ALL_BOOKS_FAILURE';

export const getAllBooksRequest = () => ({ 'type': GET_ALL_BOOKS_REQUEST });
export const getAllBooksSuccess = booksList => ({ 'type': GET_ALL_BOOKS_SUCCESS, booksList });
export const getAllBooksFailure = () => ({ 'type': GET_ALL_BOOKS_FAILURE });


export const SAVE_BOOK = 'SAVE_BOOK';

export const saveBook = () => ({ 'type': SAVE_BOOK });
