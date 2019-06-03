import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import Header from '../header';
import Home from '../home'
import Login from '../login'

const customHistory = createBrowserHistory();

console.log(history);
export default () => {
    return (
        <Router history={customHistory}>
            <Route path='/' exact component={Login} />
            <Route path='/home' component={Home} />
        </Router>
    )
}
/* return(
<div>
    <BrowserRouter>
        <Header />
        <Home />
    </BrowserRouter>
</div>
) */