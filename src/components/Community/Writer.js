// import React from "react";
// import { useRef, useState, useEffect } from "react";

// import "./Content.css";
// import data from "../../json-server/db.json";
// function Writer(props) {
//   const [con, setCon] = useState([]);

//   // useEffect(() => {
//   //   fetch("http://localhost:4000/content")
//   //     .then((response) => {
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       setCon(data);
//   //     });
//   // }, []);
//   useEffect(() => {
//     setCon(data.content);
//   });
//   function onSubmit(e) {
//     fetch(`http://localhost:4000/content`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: bodyRef.current.value,
//       }),
//     }).then((res) => {
//       if (res.ok) {
//         console.log("생성 되었습니다.");
//       }
//     });
//   }
//   const bodyRef = useRef(null);
//   return (
//     <div>
//       <div className="content_read">
//         <div className="content_read_pic"></div>
//         <form className="content_form" onSubmit={onSubmit}>
//           <textarea className="content_textarea" ref={bodyRef} />
//           <button className="content_button">댓글 달기</button>
//         </form>
//       </div>
//       {con.map((content) => (
//         <div className="content_writer">
//           <div className="content_writer_pic"></div>

//           <div className="content_writer_text">
//             <div className="content_writer_name">이름</div>
//             <div className="content_writer_content">{content.body}</div>
//             <div className="content_writer_time">시간</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Writer;
import React, { useRef, useState, useEffect } from "react";
import "./Content.css";
import data from "../../json-server/db.json";

function Writer() {
  const [con, setCon] = useState([]);

  // 데이터를 읽는 부분
  useEffect(() => {
    setCon(data.content); // 기존 json-server 데이터 읽기
  }, []);

  const bodyRef = useRef(null);

  // 데이터 생성 함수
  function onSubmit(e) {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    fetch("/api/create-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: bodyRef.current.value, // 입력받은 텍스트 값
        writer: "익명", // 작성자 값 (예시)
        title: "댓글", // 제목 값 (예시)
      }),
    })
      .then((res) => res.json())
      .then((newContent) => {
        setCon((prevCon) => [...prevCon, newContent]); // 새 데이터 추가
        bodyRef.current.value = ""; // 입력창 초기화
        console.log("댓글이 성공적으로 생성되었습니다!");
      })
      .catch((error) => console.error("Error creating comment:", error));
  }

  return (
    <div>
      <div className="content_read">
        <div className="content_read_pic"></div>
        <form className="content_form" onSubmit={onSubmit}>
          <textarea className="content_textarea" ref={bodyRef} />
          <button className="content_button">댓글 달기</button>
        </form>
      </div>
      {con.map((content) => (
        <div className="content_writer" key={content.id}>
          <div className="content_writer_pic"></div>
          <div className="content_writer_text">
            <div className="content_writer_name">
              {content.writer || "이름"}
            </div>
            <div className="content_writer_content">{content.body}</div>
            <div className="content_writer_time">시간</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Writer;
