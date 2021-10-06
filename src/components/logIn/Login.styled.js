import styled from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bolder;
  padding-right: 50px;

  input {
    background-color: rgb(58, 41, 41);
    border: none;
    height: 30px;
    color: white;
    border-radius: 3%;
  }
  .login {
    justify-content: center;
    margin-top: 5px;

    & span:hover{
      color: white;
      cursor: pointer;
    }
  }
  img{
    
    width:100%;
  }
 
`;
