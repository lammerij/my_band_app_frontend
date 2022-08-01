// import React, { useState, useEffect } from "react";

// function Bands() {
//   const [bands, setBands] = useState([]);
//   const [bandForm, setBandForm] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:9494/bands")
//       .then((response) => response.json())
//       .then((data) => setBands(data));
//   }, []);

//   const bandsList = bands.map((band) => {
//     return band;
//   });

//   return (
//     <div>
//       <li>{bandsList}</li>
//     </div>
//   );
// }

// export default Bands;
