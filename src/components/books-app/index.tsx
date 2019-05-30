import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from '../header';
import Home from '../home'

export default () => {
return(
        <Container>
            <BrowserRouter>
                <Header />
                <Home />
            </BrowserRouter>
        </Container>
    )
}