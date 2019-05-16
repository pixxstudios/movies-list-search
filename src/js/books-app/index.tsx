import * as React from 'react';
import Header from '../header/index';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
return(
<div className="container-fluid">
    <BrowserRouter>
        <Header />
    </BrowserRouter>
</div>
)
}