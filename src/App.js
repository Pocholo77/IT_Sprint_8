// import React, { useState, useEffect } from "react";
// import HeaderSection from "./components/header/HeaderSection";
// import { AppStyled } from "./App.styled";
// import Ships from "./components/ships/Ships";
// import Footer from "./components/footer/footer";

// function App() {
//   const [listadoNaves, setListadoNaves] = useState({
//     results: [],
//   });
//   const [pages, setPages] = useState(1);

//   const url = "https://swapi.dev/api/starships/";

//   const peticion = async (url) => {
//     const response = await fetch(url);
//     return response.json();
//     //return response
//   };

//   function Handlemore() {
//     setPages((prev) => {
//       setPages(prev + 1);
//     });
//   }

//   useEffect(() => {
//     (async () => {
//       if (pages < 5) {
//         const res = await peticion(`${url}?page=${pages}`);
//         setListadoNaves((prev) => {
//           return {
//             ...res.results,
//             results: [...prev.results, ...res.results],
//           };
//         });
//       }
//     })();
//   }, [pages]);

//   return (
//     <AppStyled>
//       <div>
//         <HeaderSection />
//         <Ships listadoNaves={listadoNaves} Handlemore={Handlemore}/>
//         <Footer />
//       </div>
//     </AppStyled>
//   );
// }

// export default App;
import Routes from "./components/router/router"
import React from "react"

function App(){
  return(
    <Routes />
  )
}

export default App