import React from "react";
import Spaceships from "../spaceship/Spaceships";
import { MainStyled } from "./Main.styled";

export default function Main({ listadoNaves, Handlemore }) {
  return (
    <main>
      <MainStyled>
        <div className="results">
          <Spaceships listadoNaves={listadoNaves} />
        </div>
        <button onClick={Handlemore}> More Ships!</button>
      </MainStyled>
    </main>
  );
}
