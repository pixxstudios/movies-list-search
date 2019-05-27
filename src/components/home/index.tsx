import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import BookCard from '../book-card';
import Loader from '../loader';
// import { getAllBooks } from '../../actions/index';

const Home = props => {
    const [isLoading, handleLoading] = useState(true);

    useEffect(() => {
        console.log('initial state', props.books);
        // actions.getAllBooks();
        axios.get('http://localhost:4444/books', {});
    });

    if (isLoading) {
        return <Loader isLoading />
    } else {
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
    )}
};

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapStateToAction() {
    return {}
}

export default connect(mapStateToProps, mapStateToAction)(Home);