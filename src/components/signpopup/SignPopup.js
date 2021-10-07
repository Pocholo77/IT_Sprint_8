import React from "react";
import { SignPopupStyled } from "./SignPopup.style";
import disney from "../../assets/img/disneyLogo.png";

export default function SignPopup({ handleSignSubmit , handleSignClose }) {
  return (
    <SignPopupStyled>
      <div className="SignPopupContainer">
        <div className="SignPopupHeader">
          <div className="SignPopupCloseButton">
            <span style={{ fontsize: "15" ,}} onClick={handleSignClose}>X</span>
          </div>
          <img src={disney} alt="" />
        </div>
        <div className="SignPopupBody">
          <h3 className="SignPopupFormTitle">CREATE YOUR ACCOUNT:</h3>
          <form className="SignPopupForm" onSubmit={handleSignSubmit}>
            <div>
              <input
                className="Input"
                type="text"
                name="name"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <input
                className="Input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <input
                className="Input"
                type="text"
                name="mail"
                placeholder="Email Adress"
                required
              />
            </div>
            <div>
              <input
                className="Input"
                type="text"
                name="displayName"
                placeholder="Display Name"
                required
              />
              <h6>New display names need to be approved. Until then, you'll see a temporary display name.</h6>
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
            <button type="submit">Create Account</button>
          </form>
          <div className="FormHelp">
           <h6>Already have an account?</h6><span>Need help signing in?</span>
          </div>
        </div>
      </div>
    </SignPopupStyled>
  );
}
