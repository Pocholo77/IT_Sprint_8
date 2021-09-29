import React from "react";
import logo from "../../assets/img/sw_logo_stacked.png";
import { HeaderSection } from "./HeaderSection.styled";
import Login from "../logIn/LogIn";
import NavBar from "../navbar/Navbar";

export default function Header() {
  return (
    <HeaderSection>
      <div className="row">
        <div className="social-links">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube-square"></i>
          <p style={{marginTop:'5px'}}>|</p>
          <i className="fa fa-toggle-on"></i>
        </div>
        <img src={logo} style={{ height: "88px", width: "203" }} alt=""></img>
        <Login />
      </div>
      <NavBar />
    </HeaderSection>
  );
}
