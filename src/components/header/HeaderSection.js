import React from "react";
import logo from "../../assets/img/sw_logo_stacked.png";
import { HeaderSection } from "./HeaderSection.styled";
import { Link } from "react-router-dom";
import Login from "../logIn/LogIn";
import NavBar from "../navbar/Navbar";
import kids from "../../assets/img/kids.png"

export default function Header() {
  return (
    <HeaderSection>
      <div className="row">
        <div className="social-links">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube-square"></i>
          <p className="social-links__separator" >|</p>
          <img src={kids} alt=''height='10' style={{backgroundColor: '#999' , width:'30px', borderRadius:'10px', padding:'2px'}}/> 
        </div>
        <Link to="/">
          <img className="header_logo" src={logo} alt=""></img>
        </Link>
        <Login style={{ paddingRight: "50px" }} />
      </div>
      <NavBar />
    </HeaderSection>
  );
}
