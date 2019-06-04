import styled from 'styled-components';

const AddBookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: column;
    align-items: flex-start;
    height: 400px;
    width: 700px;
    border: 1px solid grey;
    margin-left: 20px;
    margin-top: 30px;
    padding: 20px;
    border-radius: 15px;

    h1 {
        color: #55a8f3;
        font-size: 18px;
    }

    img {
        width: 150px;
        height: 200px;
        margin-top: 10px;
        cursor: pointer;
    }

    #title {
        width: 80%;
    }
`;

export default AddBookWrapper;