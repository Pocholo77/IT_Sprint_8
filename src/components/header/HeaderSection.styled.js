import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top:20px;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars-c6452e016c73.jpg');

  .row{
    width:100%;
      display:flex;
      justify-content: space-between;
  }
  .social-links{
    display: flex;
    flex-direction: row;
  }
  i{
    margin:6px;
    font-size:20px;
  }
`;
