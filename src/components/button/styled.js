import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    outline: none;
    cursor: pointer;

    ${props => props.PRIMARY &&
    css`
        background: palevioletred;
        color: white;
    `}
`;

export default ButtonWrapper;