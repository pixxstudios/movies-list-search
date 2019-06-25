import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../card';
import Loader from '../loader';
import Header from '../header';
import { getAllMoviesRequest } from '../../actions';

const Home = (props: any) => {
    const { isLoading, moviesList } = props;

    useEffect(() => {
        props.getAllMovies();
    }, []);
    const [ movies, setMovies ] = useState(moviesList);

    const handleOnSearch = (search) => {
        const searchTerm = search.target.value.toLowerCase();
        let results = moviesList.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        setMovies(results);
    }

    if (isLoading) {
        return <Loader isLoading/>
    } else {
    return(
        <div>
            <Header onSearch={handleOnSearch} />
            { movies.map(movie => <Card data={movie}/>) }
        </div>
    )}
};

const mapStateToProps = state => {
    return {
        moviesList: state.movies.moviesList,
        isLoading: state.movies.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllMovies: () => { dispatch(getAllMoviesRequest()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);  