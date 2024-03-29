import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: black;
  position: relative;
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  z-index: -1;

  & img {
    height: 200px;
    width: 400px;
  }
  .footer-background {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .footer-media {
    background-color: transparent;
    position: absolute;
    top: 0;
    bottom: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-media_social-links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & i {
      padding: 5px;
    }
    & span {
      padding: 5px;
    }
  }
  .footer-media_kids{
    height: 10px;
    width: 30px; 
    background-color: #999;
    border-radius: 10px;
    padding: 2px 
  }

  .footer-info {
    background-color: rgba(250, 250, 250, 0.4);
    position: absolute;
    bottom: 50%;
    top: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    #footer-info_legal{
      display: flex;
      justify-content: center;
    }

    & ul {
       width: 100%;
       display: flex;
       list-style-type: disc;
       margin-block-start: 1em;
       margin-block-end: 1em;
       margin-inline-start: 0px;
       margin-inline-end: 0px;
       padding-inline-start: 40px;
       list-style: none;
   
    }

    & ul > li > a {
      color: #999;
      text-decoration: none;
      font-size: 9px;
      margin: 5px;
    }
  }
`;
