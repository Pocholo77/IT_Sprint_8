import React from "react";
import picture from "../../assets/img/picture2.jpeg";
import { Link } from "react-router-dom";
import { HomeStyled } from "./Home.styled";

export default function Home() {
  return (
    <HomeStyled>
      <div className="homeClass">
        <h5>Home</h5>
        <Link to="/naves">
          <button type="button">Enter!</button>
        </Link>
        {/*<img src="https://lumiere-a.akamaihd.net/v1/images/the-book-of-boba-fett-logo-1200_511a6851.png?region=0,0,1200,725&amp;width=600" alt="The Book of Boba Fett logo" class="logo-title"  style={{width:'600px'}}/> */}
        <img
          src={picture}
          alt=""
        ></img>

      </div>
    </HomeStyled>
  );
}
