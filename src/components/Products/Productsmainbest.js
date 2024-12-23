// import { React, useEffect, useState } from "react";
// import "./Productsmainbest.css";
// import { Link } from "react-router-dom";

// function Productsmainbest({ apiEndpoint }) {
//   const [bests, setBests] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:4000/${apiEndpoint}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setBests(data);
//       });
//   }, []);
//   return (
//     <>
//       {bests.map((bests) => (
//         <div className="main_best1">
//           <Link
//             to={`/products/manentire/${bests.id}`}
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <img className="main_img1" src={bests.img} alt="img" />
//             <div className="main_text1">
//               <h2>{bests.name}</h2>
//               {bests.price}원
//             </div>
//           </Link>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Productsmainbest;
import React, { useEffect, useState } from "react";
import "./Productsmainbest.css";
import { Link } from "react-router-dom";

function Productsmainbest({ apiEndpoint }) {
  const [bests, setBests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/${apiEndpoint}`)
      .then((response) => response.json())
      .then((data) => setBests(data));
  }, [apiEndpoint]);

  return (
    <>
      {bests.map((item) => (
        <div className="main_best1" key={item.id}>
          <Link
            to={`/products/manentire/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img className="main_img1" src={item.img} alt="item" />
            <div className="main_text1">
              <h2>{item.name}</h2>
              {item.price}원
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Productsmainbest;
