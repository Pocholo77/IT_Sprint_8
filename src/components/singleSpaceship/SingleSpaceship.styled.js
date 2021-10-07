import styled from "styled-components";

export const SingleSpaceshipStyled = styled.div`
  li {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding-left: 15px;
    margin: 2px;
    background-color: rgb(53, 50, 50);
    border-radius: 5px;
  }
  li > span {
    font-size: small;
    font-weight: lighter;
    margin-bottom: 5px;
  }
`;
