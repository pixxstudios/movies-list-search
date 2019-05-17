import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default () => {
    useEffect(() => {
        console.log('use effect');
        axios.get('http://localhost:4444/books', {});
    });

    return(
        <h3>Home Page</h3>
    )
}