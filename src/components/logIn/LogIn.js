import React, { useState } from "react";
import LogPopup from "../LogPopup/LogPopup";
import SignPopup from "../signpopup/SignPopup";
import { LoginStyled } from "./Login.styled";

export default function Login() {
  const [loginPop, setLoginPop] = useState(false);
  const [signinPop, setSigninPop] = useState(false);
  //eslint-disable-next-line
  {
    /*------------------------------------------------------------LogIn functions*/
  }
  function handleLogClick() {
    setLoginPop((prev) => {
      return !prev;
    });
  }

  function handleLogClose() {
    setLoginPop(false);
  }

  function handleLogSubmit(e) {
    e.preventDefault();
    const [mail, password] = e.target.elements;
    const emailValue = mail.value;
    const passwordValue = password.value;
    //console.log(emailValue, passwordValue);

    localStorage.setItem(
      "user",
      JSON.stringify({ user: emailValue, password: passwordValue })
    );
    handleLogClose();
    console.log("Hi!" + emailValue + " You're connected");
  }
  //eslint-disable-next-line
  {
    /*------------------------------------------------------------SignIn functions*/
  }
  function handleSigninClick() {
    setSigninPop((prev) => {
      return !prev;
    });
  }

  function handleSignClose() {
    //console.log('############## YEP ##################3')
    setSigninPop(false);
  }

  function handleSignSubmit(e) {
    e.preventDefault();
    const [mail, password] = e.target.elements;
    const emailValue = mail.value;
    const passwordValue = password.value;
    //console.log(emailValue, passwordValue);

    localStorage.setItem(
      "user",
      JSON.stringify({ user: emailValue, password: passwordValue })
    );
    handleLogClose();
    console.log("Hi!" + emailValue + " You're connected");
  }

  return (
    <LoginStyled>
      <input type="text" placeholder="Search Star Wars"></input>
      <div className="login">
        <span onClick={handleLogClick}>{"LOG IN"}</span>
        <span style={{ color: "rgb(58, 41, 41)" }}> {"//"} </span>
        <span onClick={handleSigninClick}>{"SIGN UP"}</span>
      </div>
      {loginPop && (
        <LogPopup
          handleLogSubmit={handleLogSubmit}
          handleLogClose={handleLogClose}
        />
      )}
      {signinPop && (
        <SignPopup
          handleSignSubmit={handleSignSubmit}
          handleSignClose={handleSignClose}
        />
      )}
    </LoginStyled>
  );
}
