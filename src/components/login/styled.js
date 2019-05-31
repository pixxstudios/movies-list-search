import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #478dff;
    color: white;
    padding: 30px;
`;

const Heading = styled.h1`
    font-family: Dancing;
`;

const LoginForm = styled.div`
    width: 400px;
    height: 300px;
    background: #eee5ff;
    border: 1px solid yellow;
    border-radius: 10px;
    padding: 20px;
    color: black;
`;

export { LoginWrapper, LoginForm, Heading };