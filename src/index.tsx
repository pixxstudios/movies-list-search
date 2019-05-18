import * as React from 'react';
import {render} from 'react-dom';
import BooksApp from './components/books-app/index';

render(
    <BooksApp />,
    document.querySelector("#root")
);