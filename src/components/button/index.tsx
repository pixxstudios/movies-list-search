import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.scss';

const Button = props => {
    return (
        <button
            className="btn btn-primary"
            onClick={props.click}
            type="button"
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