import styled from 'styled-components';

const HeaderWrapper = styled.div`
display: flex;
justify-content: center;
color: white;
background-color: #55a8f3;
height: 70px;
padding-top: 10px;
border-bottom: 3px solid yellow;

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    font-size: 18px;
    list-style: none;

    li {
        width: 20%;
        cursor: pointer;
        margin-right: 10px;
        text-align: center;

        :hover {
            color: yellow;
        }
    }
}
`;

export default HeaderWrapper;