import * as React from 'react';
import * as PropTypes from 'prop-types';

const Button = props => {
    return (
        <button
            onClick={props.click}
            value={props.value}>
            {props.value}
        </button>
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