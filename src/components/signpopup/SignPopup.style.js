import styled from "styled-components";

export const SignPopupStyled = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: yellow;
  border-radius: 2px;

  .SignPopupContainer {
    background-color: #181615;
    _height: 484px;
    width: 540px;
  }
  .SignPopupHeader {
    margin: 0px 50px;
  }
  .SignPopupCloseButton{
    justify-content: flex-end;
    display: flex;
    & span:hover{
      color: white;
      cursor: pointer;

    }
  }
  .SignPopupFormTitle {
    color: yellow;
  }
  .SignPopupBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h6 {
    color: #aaa;
  }
  .SignPopupForm {
    & input {
      padding: 10px 15px;
      margin: 5px 0px;
      font-size: 20px;
      border-radius: 4px;
      width: 400px;
      border: 1px solid transparent;
    }

    & button {
      padding: 10px 15px;
      margin-top: 5px;
      font-size: 20px;
      border-radius: 4px;
      width: 430px;
      border: 1px solid transparent;
      background-color: #735E5E;
    }

    & button:hover {
      background-color: #3eabd0;
    }

  }
  .FormHelp{
    
    width: 432px;
    justify-content: flex-end;
    display: flex;
    & span{
      margin:2px;
    }
    & span:hover{
      text-decoration: underline;
    }

  }
  .SignPopupForm_ButtonCreateAccount{
      padding: 10px 15px;
      margin-top: 5px;
      font-size: 20px;
      border-radius: 4px;
      width: 430px;
      border: 1px solid transparent;
      background-color: transparent;
      color:yellow;
      align-self: center;
    }
    .SignPopupForm_ButtonCreateAccount:hover{
      border: 1px solid yellow;
    }
`;
