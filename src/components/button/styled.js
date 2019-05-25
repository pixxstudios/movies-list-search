import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
    background: #3477FE;
    border-radius: 3px;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    outline: none;
    cursor: pointer;

    ${props => props.PRIMARY &&
    css`
        background: #34A6FE;
    `}

    ${props => props.DISABLED &&
        css`
            background: #c2c2c2;
            cursor: not-allowed;
        `}
`;

export default ButtonWrapper;