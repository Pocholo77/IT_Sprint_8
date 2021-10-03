import React , {useState, useEffect} from "react";
import Spaceships from "../spaceship/Spaceships";
import { ShipsStyled } from "./Ships.styled";

export default function Ships() {
  const [listadoNaves, setListadoNaves] = useState({
        results: [],
      });
      const [pages, setPages] = useState(1);
    
      const url = "https://swapi.dev/api/starships/";
    
      const peticion = async (url) => {
        const response = await fetch(url);
        return response.json();
        //return response
      };
    
      function Handlemore() {
        setPages((prev) => {
          setPages(prev + 1);
        });
      }
    
      useEffect(() => {
        (async () => {
          if (pages < 5) {
            const res = await peticion(`${url}?page=${pages}`);
            setListadoNaves((prev) => {
              return {
                ...res.results,
                results: [...prev.results, ...res.results],
              };
            });
          }
        })();
      }, [pages]);
  return (  
      <ShipsStyled>
        <div className="results">
          <Spaceships listadoNaves={listadoNaves} />
        </div>
        <button onClick={Handlemore}> More Ships!</button>
      </ShipsStyled>
  );
}
