import * as React from 'react';
import HeaderWrapper from './styled';

const Header = () => {
return (
        <HeaderWrapper>
            <ul>
                <li>Add New Book</li>
                <li>Download</li>
            </ul>
        </HeaderWrapper>
    )
};

export default Header;