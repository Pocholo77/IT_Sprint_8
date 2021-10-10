import styled from "styled-components";

export const LogPopupStyled = styled.div`
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

  input{
    height: 10px;
  }

  .LogPopupContainer {
    background-color: #181615;
    height: 484px;
    width: 540px;
  }
  .LogPopupHeader {
    margin: 0px 50px;
  }
  .LogPopupCloseButton {
    display: flex;
    justify-content: flex-end;
    color: #999;

    & span:hover {
      color: white;
      cursor: pointer;
    }
  }
  .LogPopupFormTitle {
    color: yellow;
  }
  .LogPopupBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .LogPopupForm {
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
      background-color: #735e5e;
    }

    & button:hover {
      background-color: #3eabd0;
    }
  }
  .FormHelp {
    width: 432px;
    justify-content: flex-end;
    display: flex;

    & span {
      margin: 2px;
    }
    & span:hover {
      text-decoration: underline;
    }
  }
  .LogPopupForm_ButtonCreateAccount {
    padding: 10px 15px;
    margin-top: 5px;
    font-size: 20px;
    border-radius: 4px;
    width: 430px;
    border: 1px solid transparent;
    background-color: transparent;
    color: yellow;
    align-self: center;
  }
  .LogPopupForm_ButtonCreateAccount:hover {
    border: 1px solid yellow;
  }
`;
