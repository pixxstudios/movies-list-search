import * as React from 'react';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import BookCard from '../book-card';
import Loader from '../loader';
import { getAllBooks } from '../../actions';

const Home = props => {
    const [isLoading, handleLoading] = useState(true);

    useEffect(() => {
        console.log(props);
        // props.getAllBooks();
        console.log('_____');
        // axios.get('http://localhost:4444/books', {});
    });

    // props.getAllBooks();
    
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
        books: state.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllBooks: () => {
            console.log('getAllBooks ', getAllBooks);
            dispatch(getAllBooks())
        ;}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);  