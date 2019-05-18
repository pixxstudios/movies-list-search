import * as React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BooksApp from './components/books-app/index';
import reducers from './reducers';

render(
    <Provider store={createStore(reducers)}>
        <BooksApp />
    </Provider>
    ,
    document.querySelector("#root")
);