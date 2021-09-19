import React , {useEffect, useState} from "react";



export default function Spaceships(){

const [listadoNaves, setListadoNaves ] = useState({
    results: []
});

useEffect(()=>{

   (async ()=>{
    const response = await fetch('https://swapi.dev/api/starships/')
    const responseBody = await response.json()
    setListadoNaves(responseBody)
   })()

},[])
   
    return (
        
        <ul>
            {listadoNaves.results.map( nave => {
                return (
                    <li key={nave.name}>
                        {nave.name}
                        <br/>
                        {nave.model}
                        
                    </li>
                )
            }) }
        </ul>
    )
}