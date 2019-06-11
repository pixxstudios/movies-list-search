import * as React from 'react';
import * as PropTypes from 'prop-types';
import ButtonWrapper from './styled';
import { PRIMARY } from './variants';

const Button = props => {
    return (
        <ButtonWrapper {...props} onClick={props.click}>
            {props.value}
        </ButtonWrapper>
    )
};

Button.defaultProps = {
    click: () => {},
    variant: PRIMARY,
    value: ''
};

Button.propTypes = {
    click: PropTypes.func,
    variant: PropTypes.string,
    value: PropTypes.string
};

export default Button;