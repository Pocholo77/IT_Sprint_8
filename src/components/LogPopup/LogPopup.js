import React from "react";
import { LogPopupStyled } from "./LogPopup.styled";
import disney from "../../assets/img/disneyLogo.png";

export default function LogPopup({ handleLogSubmit , handleLogClose }) {
  return (
    <LogPopupStyled>
      <div className="LogPopupContainer">
        <div className="LogPopupHeader">
          <div className="LogPopupCloseButton">
            <span style={{ fontsize: "15" ,}} onClick={handleLogClose}>X</span>
          </div>
          <img src={disney} alt="" />
        </div>
        <div className="LogPopupBody">
          <h3 className="LogPopupFormTitle">Sign In:</h3>
          <form className="LogPopupForm" onSubmit={handleLogSubmit}>
            <div>
              <input
                className="Input"
                type="text"
                name="mail"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <input
                className="Input"
                type="password"
                name="password"
                placeholder="Enter your pass"
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className="FormHelp">
            <span>Need help signing in?</span>
          </div>
          <button className="LogPopupForm_ButtonCreateAccount" type="submit">
            Create an Account
          </button>
        </div>
      </div>
    </LogPopupStyled>
  );
}
