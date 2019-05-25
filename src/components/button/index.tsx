import * as React from 'react';
import * as PropTypes from 'prop-types';
import ButtonWrapper from './styled';

const Button = props => {
    return (
        <ButtonWrapper {...props}>
            CLICK ME!
        </ButtonWrapper>
    )
};

Button.defaultProps = {
    click: () => {}
};

Button.propTypes = {
    click: PropTypes.func
};

export default Button;