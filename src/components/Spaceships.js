import React, { useEffect, useState } from "react";
import SingleSpaceship from "./SingleSpaceship";

export default function Spaceships() {
  const [listadoNaves, setListadoNaves] = useState({
    results: [],
  });

  useEffect(() => {
    (async () => {
      const response = await fetch("https://swapi.dev/api/starships/");
      const responseBody = await response.json();
      setListadoNaves(responseBody);
    })();
  }, []);

  return (
    <ul>
      {listadoNaves.results.map((nave) => {
        return <SingleSpaceship key={nave.name} {...nave} />;
      })}
    </ul>
  );
}
