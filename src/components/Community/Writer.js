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

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import data from "../../json-server/db.json";

const ContentRead = styled.div`
  padding: 20px;
  width: 100%;
  height: 200px;
  background-color: rgba(221, 178, 255, 0.4);
  border-radius: 15px 15px 0px 0px;
  display: flex;
`;

const ContentReadPic = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  background-color: darkgray;
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ContentButton = styled.button`
  height: 40px;
  width: 100px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px 1px rgba(0, 0, 0, 0.25);
`;

const ContentTextarea = styled.textarea`
  height: 70%;
  width: 800px;
  border-radius: 10px;
`;

const ContentWriter = styled.div`
  padding: 20px;
  display: flex;
  margin-top: 5px;
  width: 100%;
  height: 200px;
  background-color: rgba(221, 178, 255, 0.4);
`;

const ContentWriterPic = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  background-color: darkgray;
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

const ContentWriterText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWriterName = styled.div`
  font-weight: 800;
`;

const ContentWriterContent = styled.div`
  font-size: large;
`;

const ContentWriterTime = styled.div`
  font-size: small;
`;

function Writer() {
  const [con, setCon] = useState([]);

  useEffect(() => {
    setCon(data.content);
  }, []);

  const bodyRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    fetch("/api/create-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: bodyRef.current.value,
        writer: "익명",
        title: "댓글",
      }),
    })
      .then((res) => res.json())
      .then((newContent) => {
        setCon((prevCon) => [...prevCon, newContent]);
        bodyRef.current.value = "";
        console.log("댓글이 성공적으로 생성되었습니다!");
      })
      .catch((error) => console.error("Error creating comment:", error));
  }

  return (
    <div>
      <ContentRead>
        <ContentReadPic />
        <ContentForm onSubmit={onSubmit}>
          <ContentTextarea ref={bodyRef} />
          <ContentButton>댓글 달기</ContentButton>
        </ContentForm>
      </ContentRead>
      {con.map((content) => (
        <ContentWriter key={content.id}>
          <ContentWriterPic />
          <ContentWriterText>
            <ContentWriterName>{content.writer || "이름"}</ContentWriterName>
            <ContentWriterContent>{content.body}</ContentWriterContent>
            <ContentWriterTime>시간</ContentWriterTime>
          </ContentWriterText>
        </ContentWriter>
      ))}
    </div>
  );
}

export default Writer;
