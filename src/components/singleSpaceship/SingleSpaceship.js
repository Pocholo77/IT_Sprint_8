import React, { useState } from "react";
import { SingleSpaceshipStyled } from "./SingleSpaceship.styled";
import { Fragment } from "react/cjs/react.production.min";
import imageShip from "../../maps/spaceships";

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
        <h3>{name}</h3>
        <span>Model: {model}</span>
        {open && (
          <Fragment>
            <div className="Ship-detail">
              <img src={imageShip[name]} alt="" />
              <div className="Ship-detail-info">
                <span>Manufacturer: {manufacturer}</span>
                <span>Cost in redits: {cost_in_credits}</span>
                <span>Length: {length}</span>
                <span>Crew: {crew}</span>
                <span>Passengers: {passengers}</span>
              </div>
            </div>
          </Fragment>
        )}
      </li>
    </SingleSpaceshipStyled>
  );
}
