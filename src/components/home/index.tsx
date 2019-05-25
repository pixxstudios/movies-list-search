import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import BookCard from '../book-card';
// import { getAllBooks } from '../../actions/index';

const Home = () => {
    useEffect(() => {
        // console.log('use effect ', getAllBooks);
        // actions.getAllBooks();
        axios.get('http://localhost:4444/books', {});
    });

    return(
        <div>
            <h4>Recently added books</h4>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </div>
    )
};

export default connect()(Home);