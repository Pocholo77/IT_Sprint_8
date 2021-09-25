import React from "react";
import { LoginStyled } from "./Login.styled";

export default function Login() {
  return (
    <LoginStyled>
      <span>{"Log in"}</span>
      <span> {"//"} </span>
      <span>{"Sign up"}</span>
    </LoginStyled>
  );
}
