import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function SingleSpaceship({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
}) {
  function handleOnclick() {
    setOpen(!open);
  }

  const [open, setOpen] = useState(false);

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "5px",
        margin: "2px",
      }}
      onClick={handleOnclick}
    >
      <span>name: {name}</span>
      <span>model: {model}</span>
      {open && (
        <Fragment>
          <span>manufacturer: {manufacturer}</span>
          <span>cost in redits: {cost_in_credits}</span>
          <span>length: {length}</span>
        </Fragment>
      )}
    </li>
  );
}
