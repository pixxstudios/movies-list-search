import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import Card from '../card';
import Loader from '../loader';
import Header from '../header';
import { getAllMoviesRequest } from '../../actions';

const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, moviesList } = useSelector(state => state.movies, []);\

    useEffect(() => {
        dispatch(getAllMoviesRequest());
    }, []);
    
    const [movies, setMovies] = useState(moviesList);

    useEffect(() => {
        setMovies(moviesList);
    }, [moviesList]);

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
            { movies.map(movie => <Card data={movie} key={v4()}/>) }
        </div>
    )}
};

export default Home;