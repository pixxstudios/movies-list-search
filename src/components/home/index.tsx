import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { getAllBooks } from '../../actions/index';

const Home = () => {
    useEffect(() => {
        // console.log('use effect ', getAllBooks);
        // actions.getAllBooks();
        axios.get('http://localhost:4444/books', {});
    });

    return(
        <h3>Home Page</h3>
    )
};

export default connect()(Home);