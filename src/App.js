import React , { useState, useEffect} from "react";
import Spaceships from "./components/Spaceships";




function App() {

  const [listadoNaves, setListadoNaves] = useState({
    results: [],
  });

  const peticion = async (url) => {
    const response = await fetch(url)
    return response.json();
    //return response     
  }
  

  useEffect(() => {
    (async () => {
      const res = await peticion("https://swapi.dev/api/starships/?page=2");
      setListadoNaves(res);
    })();
  }, []);


  return (
    <div className="App">
      <Spaceships listadoNaves={listadoNaves}/>
    </div>
  );
}

export default App;
