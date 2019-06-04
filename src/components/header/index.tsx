import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from './styled';

const Header = () => {
return (
        <HeaderWrapper>
            <ul>
                <li><Link to="/addbook">Add New Book</Link></li>
                <li><Link to="/download">Download</Link></li>
            </ul>
        </HeaderWrapper>
    )
};

export default Header;