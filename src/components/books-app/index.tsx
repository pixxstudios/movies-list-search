import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header';
import Home from '../home'
import Login from '../login'

export default () => {
    return <Login /> 
}
/* return(
<div>
    <BrowserRouter>
        <Header />
        <Home />
    </BrowserRouter>
</div>
) */