import styled from "styled-components";

export const NavBarStyled = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  border-top: 0.5px solid rgb(58, 41, 41);
  border-bottom: 0.5px solid rgb(58, 41, 41);
  display: flex;
  justify-content: center;
  background-color: black;
  font-weight: bolder;

  div {
    border-right: 0.5px solid rgb(58, 41, 41);
    border-left: 0.5px solid rgb(58, 41, 41);
    padding: 10px;
    display: table;
  }

  span {
    display: table-cell;
    vertical-align: middle;
  }

  div > span:hover {
    color: white;
  }
`;
