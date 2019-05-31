import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #478dff;
    color: white;
    padding: 30px;
`;

const LoginForm = styled.div`
    width: 400px;
    height: 300px;
    border: 1px solid yellow;
    border-radius: 10px;
    padding: 20px;
`;

export { LoginWrapper, LoginForm };