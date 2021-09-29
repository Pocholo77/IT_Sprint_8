import React from "react";
import { LoginStyled } from "./Login.styled";

export default function Login() {
  return (
    <LoginStyled>
      <input type='text' placeholder="Search Star Wars" ></input>
      <div className='login'>
        <span>{"LOG IN"}</span>
        <span style={{ color:'rgb(58, 41, 41)'}}> {"//"} </span>
        <span>{"SIGN UP"}</span>
      </div>
    </LoginStyled>
  );
}
