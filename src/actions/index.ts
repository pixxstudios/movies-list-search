const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
const SAVE_BOOK = 'SAVE_BOOK';

export const getAllBooks = () => ({ 'type': GET_ALL_BOOKS });
export const saveBook = () => ({ 'type': SAVE_BOOK });
