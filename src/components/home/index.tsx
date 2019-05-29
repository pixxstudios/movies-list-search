import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BookCard from '../book-card';
import Loader from '../loader';
import { getAllBooksRequest } from '../../actions';

const Home = props => {
    // const [isLoading, handleLoading] = useState(true);

    useEffect(() => {
        props.getAllBooks();
    }, []);

    const { isLoading } = props;
    
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

const mapStateToProps = state => {
    return {
        booksList: state.books.booksList,
        isLoading: state.books.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllBooks: () => { dispatch(getAllBooksRequest()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);  