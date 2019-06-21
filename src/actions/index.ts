export const GET_ALL_MOVIES_REQUEST = 'GET_ALL_MOVIES_REQUEST';
export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS';
export const GET_ALL_MOVIES_FAILURE = 'GET_ALL_MOVIES_FAILURE';

export const getAllMoviesRequest = () => ({ 'type': GET_ALL_MOVIES_REQUEST });
export const getAllMoviesSuccess = moviesList => ({ 'type': GET_ALL_MOVIES_SUCCESS, moviesList });
export const getAllMoviesFailure = () => ({ 'type': GET_ALL_MOVIES_FAILURE });


// login related actions
export const CHECK_USER_CREDENTIALS_REQUEST = 'CHECK_USER_CREDENTIALS_REQUEST';
export const CHECK_USER_CREDENTIALS_SUCCESS = 'CHECK_USER_CREDENTIALS_SUCCESS';
export const CHECK_USER_CREDENTIALS_FAILURE = 'CHECK_USER_CREDENTIALS_FAILURE';

export const checkUserCredentialsRequest = (username, password) => ({ 'type': CHECK_USER_CREDENTIALS_REQUEST, username, password });
