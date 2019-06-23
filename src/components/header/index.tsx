import * as React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from './styled';

const Header = props => {
return (
        <HeaderWrapper>
            <input type="text" placeholder="Search" onChange={props.onSearch} />
        </HeaderWrapper>
    )
};

Header.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default Header;