import React from "react";
import SingleSpaceship from "./SingleSpaceship";

export default function Spaceships({listadoNaves}) {
  
  return (
    <ul>
      {listadoNaves.results.map((nave) => {
        return <SingleSpaceship key={nave.name} {...nave} />;
      })}
    </ul>
  );
}
