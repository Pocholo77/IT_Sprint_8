import React from "react";
import { NavBarStyled } from "./Navbar.styled";

export default function NavBar(){
    return(
        <NavBarStyled>
            <div className='navButton'><span>NEWS + BLOG</span></div>
            <div className='navButton'><span>VIDEO</span></div>
            <div className='navButton'><span>FILMS</span></div>
            <div className='navButton'><span>SERIES</span></div>
            <div className='navButton'><span>INTERACTIVE</span></div>
            <div className='navButton'><span>NAVES</span></div>
            <div className='navButton'><span>DISNEY+</span></div>
        </NavBarStyled>
    )
}