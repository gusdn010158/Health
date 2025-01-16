import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Content.css";
import Writer from "./Writer";
import data from "../../json-server/db.json";

function Content(props) {
  const { id } = useParams();
  const [names, setNames] = useState(null);

  useEffect(() => {
    const item = data.names.find((product) => product.id === id); // id를 찾아서 해당 항목을 설정
    if (item) {
      setNames(item);
    } else {
      console.error(`Category "${id}" does not exist in data.`);
      setNames(null);
    }
  }, [id]);

  if (!names) {
    return <div>Loading...</div>; // names가 null일 때 로딩 화면 표시
  }

  return (
    <div className="content">
      <div className="content_body">
        <div className="content_title">
          <div className="content_title_pic"></div>
          <div>
            <div className="content_title_title">{names.title}</div>
            <div className="content_title_name">작성자: {names.writer}</div>
          </div>
        </div>

        <div className="content_content">{names.body}</div>

        <Writer />
      </div>
    </div>
  );
}

export default Content;

// import { React, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./Content.css";
// import Writer from "./Writer";
// import data from "../../json-server/db.json";

// function Content() {
//   const { id } = useParams();
//   const [names, setNames] = useState(null);

//   useEffect(() => {
//     console.log("Data:", data.names); // 데이터 구조 확인
//     const foundName = data.names.find((item) => item.id === Number(id)); // id 비교
//     if (foundName) {
//       setNames(foundName);
//     } else {
//       console.error("No data found for ID:", id);
//     }
//   }, [id]);

//   if (!names) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="content">
//       <div className="content_body">
//         <div className="content_title">
//           <div className="content_title_pic"></div>
//           <div>
//             <div className="content_title_title">{names.title}</div>
//             <div className="content_title_name">작성자: {names.writer}</div>
//           </div>
//         </div>
//         <div className="content_content">{names.body}</div>
//         <Writer />
//       </div>
//     </div>
//   );
// }

// export default Content;
