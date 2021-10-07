import React from "react";
import logo from "../../assets/img/sw_logo_stacked.png";
import { HeaderSection } from "./HeaderSection.styled";
import { Link } from "react-router-dom";
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
          <p style={{ marginTop: "5px" }}>|</p>
          <i className="fa fa-toggle-on"></i>
        </div>
        <Link to="/">
          <img src={logo} alt=""></img>
        </Link>
        <Login style={{ paddingRight: "50px" }} />
      </div>
      <NavBar />
    </HeaderSection>
  );
}
