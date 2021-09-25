import React from "react";
import logo from "../../assets/img/sw_logo_stacked.png"
import {HeaderSection} from "./HeaderSection.styled";
import Login from "../LogIn/LogIn";

export default function Header(){
    return(
         <HeaderSection>
             <div>
            </div>
             <img src={logo} alt=""></img>
            <Login />  
         </HeaderSection>
    )
}