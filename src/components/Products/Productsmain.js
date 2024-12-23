// import React from "react";
// import "./Productsmain.css";
// import advertisement from "../img/coad.jpg";
// import Productsmainbest from "./Productsmainbest";

// function Productsmain() {
//   return (
//     <div className="Productsmain">
//       <div className="advertisement">
//         <img src={advertisement} alt="advertisement" />
//         <h1>BEST</h1>
//         <div className="main_best">
//           <div className="main_bestscroll">
//             <Productsmainbest apiEndpoint="products" />
//           </div>
//         </div>
//         <div className="prototype"></div>
//         <h1>New</h1>
//         <div className="main_new">
//           <div className="main_newscroll">
//             <Productsmainbest apiEndpoint="massage" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Productsmain;
import React from "react";
import "./Productsmain.css";
import advertisement from "../img/coad.jpg";
import Productsmainbest from "./Productsmainbest";

function Productsmain() {
  const sections = [
    { title: "BEST", apiEndpoint: "products", className: "main_bestscroll" },
    { title: "New", apiEndpoint: "massage", className: "main_newscroll" },
  ];

  return (
    <div className="Productsmain">
      <div className="advertisement">
        <img src={advertisement} alt="advertisement" />
        {sections.map((section, index) => (
          <div key={index}>
            <h1>{section.title}</h1>
            <div className={section.className}>
              <Productsmainbest apiEndpoint={section.apiEndpoint} />
            </div>
          </div>
        ))}
        <div className="prototype"></div>
      </div>
    </div>
  );
}

export default Productsmain;
