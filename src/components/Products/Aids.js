// import { Link, Route, Routes } from "react-router-dom";
// import Rmain from "./Rmain";
// import "./Aids.css";
// import React, { useEffect, useState } from "react";
// import "./Rmain.css";
// const Aids = () => {
//   const [gym, setGym] = useState([]);
//   const [Pilates, setPilates] = useState([]);
//   const [Golf, setGolf] = useState([]);
//   const [Yoga, setYoga] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:4000/gym`)
//       .then((response) => response.json())
//       .then((data) => setGym(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   useEffect(() => {
//     fetch(`http://localhost:4000/Pilates`)
//       .then((response) => response.json())
//       .then((data) => setPilates(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   useEffect(() => {
//     fetch(`http://localhost:4000/Golf`)
//       .then((response) => response.json())
//       .then((data) => setGolf(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   useEffect(() => {
//     fetch(`http://localhost:4000/Yoga`)
//       .then((response) => response.json())
//       .then((data) => setYoga(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   return (
//     <div className="Aids">
//       <div className="rap_head">
//         <div className="rap_hr"></div>
//         <div className="rap_header">
//           <h1>-헬스장 바로가기-</h1>
//         </div>
//         <ul>
//           <Link to="gym" style={{ textDecoration: "none", color: "black" }}>
//             <li className="line">헬스장</li>
//           </Link>
//           <Link
//             to="/Pilates"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <li className="line">필라테스</li>
//           </Link>
//           <Link to="Golf" style={{ textDecoration: "none", color: "black" }}>
//             <li className="line">골프</li>
//           </Link>
//           <Link to="/Yoga" style={{ textDecoration: "none", color: "black" }}>
//             <li>요가</li>
//           </Link>
//         </ul>
//         <div className="rap_select">
//           <select>
//             <option>추천순</option>
//             <option>가나다순</option>
//             <option>최신순</option>
//           </select>
//         </div>
//       </div>
//       <div className="aidmain">
//         {gym.map((gym) => (
//           <div className="rap_main" key={gym.id}>
//             <img className="rap_main_img" src={gym.img} alt="img" />
//             <div className="rap_main_plus">
//               <div className="rap_main_name">{gym.name}</div>
//               <div className="rap_main_price">
//                 {gym.local} {gym.price}원
//               </div>
//             </div>
//             <div className="rap_main_button">
//               <button
//                 className="r_main_button"
//                 style={{ textDecoration: "none", color: "white" }}
//                 onClick={() => window.open("https://jamaicaseoul.modoo.at/")}
//               >
//                 링크 바로가기
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="aidmain">
//         {Pilates.map((gym) => (
//           <div className="rap_main" key={gym.id}>
//             <img className="rap_main_img" src={gym.img} alt="img" />
//             <div className="rap_main_plus">
//               <div className="rap_main_name">{gym.name}</div>
//               <div className="rap_main_price">
//                 {gym.local} {gym.price}원
//               </div>
//             </div>
//             <div className="rap_main_button">
//               <button
//                 className="r_main_button"
//                 style={{ textDecoration: "none", color: "white" }}
//                 onClick={() => window.open("https://jamaicaseoul.modoo.at/")}
//               >
//                 링크 바로가기
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="aidmain">
//         {Golf.map((gym) => (
//           <div className="rap_main" key={gym.id}>
//             <img className="rap_main_img" src={gym.img} alt="img" />
//             <div className="rap_main_plus">
//               <div className="rap_main_name">{gym.name}</div>
//               <div className="rap_main_price">
//                 {gym.local} {gym.price}원
//               </div>
//             </div>
//             <div className="rap_main_button">
//               <button
//                 className="r_main_button"
//                 style={{ textDecoration: "none", color: "white" }}
//                 onClick={() => window.open("https://jamaicaseoul.modoo.at/")}
//               >
//                 링크 바로가기
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="aidmain">
//         {Yoga.map((gym) => (
//           <div className="rap_main" key={gym.id}>
//             <img className="rap_main_img" src={gym.img} alt="img" />
//             <div className="rap_main_plus">
//               <div className="rap_main_name">{gym.name}</div>
//               <div className="rap_main_price">
//                 {gym.local} {gym.price}원
//               </div>
//             </div>
//             <div className="rap_main_button">
//               <button
//                 className="r_main_button"
//                 style={{ textDecoration: "none", color: "white" }}
//                 onClick={() => window.open("https://jamaicaseoul.modoo.at/")}
//               >
//                 링크 바로가기
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="pagination-box">
//         <a className="paging_btn">1</a>
//         <a className="paging_btn">2</a>
//         <a className="paging_btn">3</a>
//         <a className="paging_btn">4</a>
//       </div>
//     </div>
//   );
// };

// export default Aids;

// <Routes>
//   <Route path="/gym" element={<Rmain apipoint="gym" />} />
//   <Route path="/Pilates" element={<Rmain apipoint="Pilates" />} />
//   <Route path="/Golf" element={<Rmain apipoint="Golf" />} />
//   <Route path="/Yoga" element={<Rmain apipoint="Yoga" />} />
// </Routes>;
import { Link, Route, Routes } from "react-router-dom";
import "./Aids.css";
import React, { useEffect, useState } from "react";

const Aids = () => {
  const [data, setData] = useState([]);
  const [apipoint, setApipoint] = useState("gym");

  useEffect(() => {
    fetch(`http://localhost:4000/${apipoint}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apipoint]);

  return (
    <div className="Aids">
      <div className="rap_head">
        <div className="rap_hr"></div>
        <div className="rap_header">
          <h1>-헬스장 바로가기-</h1>
        </div>
        <ul>
          <Link
            to="/gym"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setApipoint("gym")}
          >
            <li className="line">헬스장</li>
          </Link>
          <Link
            to="/Pilates"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setApipoint("Pilates")}
          >
            <li className="line">필라테스</li>
          </Link>
          <Link
            to="/Golf"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setApipoint("Golf")}
          >
            <li className="line">골프</li>
          </Link>
          <Link
            to="/Yoga"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setApipoint("Yoga")}
          >
            <li>요가</li>
          </Link>
        </ul>
        <div className="rap_select">
          <select>
            <option>추천순</option>
            <option>가나다순</option>
            <option>최신순</option>
          </select>
        </div>
      </div>

      <div className="aidmain">
        {data.map((item) => (
          <div className="rap_main" key={item.id}>
            <img className="rap_main_img" src={item.img} alt="img" />
            <div className="rap_main_plus">
              <div className="rap_main_name">{item.name}</div>
              <div className="rap_main_price">
                {item.local} {item.price}원
              </div>
            </div>
            <div className="rap_main_button">
              <button
                className="r_main_button"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => window.open("https://jamaicaseoul.modoo.at/")}
              >
                링크 바로가기
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-box">
        <a className="paging_btn">1</a>
        <a className="paging_btn">2</a>
        <a className="paging_btn">3</a>
        <a className="paging_btn">4</a>
      </div>
    </div>
  );
};

export default Aids;
