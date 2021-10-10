import styled from "styled-components";

export const SingleSpaceshipStyled = styled.div`
  h3{
    margin: 0;
    color: lightgrey;
  }
  li {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 15px;
    margin: 2px;
    background-color: rgb(53, 50, 50);
    border-radius: 5px;
  }
  .Ship-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img{
      margin: 5px;
    }
  }
  .Ship-detail-info {
    display: flex;
    flex-direction: column;

    & span {
      font-size: small;
      font-weight: lighter;
      margin-bottom: 5px;
     
    }
  }
  img {
    max-height: 400px;
    max-width: 400px;
  }
`;
