import * as React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import BooksApp from './components/movies-app/index';
import store from './store';

render(
    <Provider store={store}>
        <BooksApp />
    </Provider>
    ,
    document.querySelector("#root")
);