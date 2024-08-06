// import { React, useState, useEffect, useRef } from "react";
// import "./Cbest.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Cbest(props) {
//   const navigate = useNavigate();
//   const [days, setDays] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:4000/names")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setDays(data);
//       });
//   });

//   function onSubmit(e) {
//     e.preventDefault();

//     fetch(`http://localhost:4000/names`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: titleRef.current.value,
//         body: bodyRef.current.value,
//         writer: writerRef.current.value,
//       }),
//     }).then((res) => {
//       if (res.ok) {
//         alert("생성이 완료되었습니다.");
//         navigate("./Community");
//       }
//     });
//   }

//   const titleRef = useRef(null);
//   const bodyRef = useRef(null);
//   const writerRef = useRef(null);

//   return (
//     <div className="Cbest">
//       <div className="cbest_main">
//         <form className="cbest_from" onSubmit={onSubmit}>
//           <h2 className="cbest_h2">게시물 올리기</h2>
//           <div className="choice">
//             <select>
//               <option>체중감량</option>
//               <option>근력강화</option>
//               <option>식단조절</option>
//             </select>
//           </div>
//           <div className="cbest_input">
//             <h3>제목</h3>
//             <input
//               type="name"
//               name="title"
//               placeholder="제목을 입력해주세요"
//               ref={titleRef}
//             />
//           </div>
//           <div className="cbest_text">
//             <h3>내용</h3>
//             <textarea
//               name="body"
//               className="cbest_textarea"
//               placeholder="내용을 입력해주세요"
//               ref={bodyRef}
//             />
//           </div>
//           <div className="cbest_input">
//             <h2>작성자</h2>
//             <input
//               type="name"
//               name="title"
//               placeholder="작성자를 입력해주세요"
//               ref={writerRef}
//             />
//           </div>

//           <div className="cbest_button">
//             <button>등록</button>
//             <button>
//               <Link
//                 to="strap"
//                 style={{ textDecoration: "none", color: "#ffff" }}
//               >
//                 목록
//               </Link>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Cbest;
import React, { useState, useEffect } from "react";
import "./Cbest.css";
import { Link, useNavigate } from "react-router-dom";

function Cbest(props) {
  const navigate = useNavigate();
  const [days, setDays] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [writer, setWriter] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/names")
      .then((res) => res.json())
      .then((data) => {
        setDays(data);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/names", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          writer,
        }),
      });

      if (res.ok) {
        alert("생성이 완료되었습니다.");
        navigate("./Community");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Cbest">
      <div className="cbest_main">
        <form className="cbest_from" onSubmit={onSubmit}>
          <h2 className="cbest_h2">게시물 올리기</h2>
          <div className="choice">
            <select>
              <option>체중감량</option>
              <option>근력강화</option>
              <option>식단조절</option>
            </select>
          </div>
          <div className="cbest_input">
            <h3>제목</h3>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="cbest_text">
            <h3>내용</h3>
            <textarea
              name="body"
              className="cbest_textarea"
              placeholder="내용을 입력해주세요"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="cbest_input">
            <h3>작성자</h3>
            <input
              type="text"
              name="writer"
              placeholder="작성자를 입력해주세요"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
          </div>
          <div className="cbest_button">
            <button type="submit">등록</button>
            <button type="button">
              <Link
                to="strap"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                목록
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cbest;
