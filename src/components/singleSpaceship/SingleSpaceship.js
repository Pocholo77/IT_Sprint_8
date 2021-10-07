import React, { useState } from "react";
import { SingleSpaceshipStyled } from "./SingleSpaceship.styled";
import { Fragment } from "react/cjs/react.production.min";

export default function SingleSpaceship({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  crew,
  passengers,
}) {
  function handleOnclick() {
    setOpen(!open);
  }

  const [open, setOpen] = useState(false);

  return (
    <SingleSpaceshipStyled>
      <li onClick={handleOnclick}>
        <h3 style={{margin:10}}>{name}</h3>
        <span>Model: {model}</span>
        {open && (
          <Fragment>
            <span>Manufacturer: {manufacturer}</span>
            <span>Cost in redits: {cost_in_credits}</span>
            <span>Length: {length}</span>
            <span>Crew: {crew}</span>
            <span>Passengers: {passengers}</span>
          </Fragment>
          
        )}
      </li>
    </SingleSpaceshipStyled>
  );
}
