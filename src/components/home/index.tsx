import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../card';
import Loader from '../loader';
import Header from '../header';
import { getAllMoviesRequest } from '../../actions';

const Home = (props: any) => {
    useEffect(() => {
        props.getAllMovies();
    }, []);

    const { isLoading } = props;
    console.log(props);
    
    if (isLoading) {
        return <Loader isLoading/>
    } else {
    return(
        <div>
            <Header />
            <Card />
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