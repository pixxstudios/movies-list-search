import * as React from 'react';
import * as PropTypes from 'prop-types';
import ButtonWrapper from './styled';

const Button = props => {
    return (
        <ButtonWrapper>
            Primary
        </ButtonWrapper>
    )
};

Button.defaultProps = {
    click: () => {},
    value: ''
};

Button.propTypes = {
    click: PropTypes.func,
    value: PropTypes.string
};

export default Button;