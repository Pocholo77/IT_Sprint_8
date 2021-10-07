import React from "react";
import { FooterStyled } from "./Footer.styled";
import vader from "../../assets/img/vader_2.jpg";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="footer-background">
        <img src={vader} alt="" />
        <div className="footer-media">
          <h5>FOLLOW STAR WARS</h5>
          <div className="footer-media_social-links">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube-square"></i>
            <span style={{ marginTop: "5px" }}>|</span>
            <i className="fa fa-toggle-on"></i>
          </div>
        </div>
        <div className="footer-info">
          <h5>TM © Lucasfilm Ltd. All Rights Reserved</h5>
          <ul id="footer-info__legal">
            <li>
              <a target="_blank" href="/">
                Terms of Use
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Additional Content Information
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Children’s Online Privacy Policy
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Your California Privacy Rights
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Star Wars at shopDisney
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Star Wars Helpdesk
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Interest-Based Ads
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Do Not Sell My Personal Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  );
}
