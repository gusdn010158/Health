import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import backpage from "../img/backpage.jpg";
import showingpage from "../img/showingpage.png";
const CbestContainer = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  justify-content: center;
  background-image: url(${backpage});
  background-size: cover;
  background-attachment: fixed;
  overflow: scroll;
`;

const MainContainer = styled.div`
  margin-top: 60px;
  box-sizing: border-box;
  width: 70%;
  height: 900px;
  background-color: #ffff;
  background-image: url(${showingpage});
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 400px;
`;

const Choice = styled.div`
  margin-bottom: 50px;
  display: flex;

  select {
    border-radius: 10px;
    margin-left: 840px;
  }
`;

const InputContainer = styled.div`
  height: 8%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;

  input {
    height: 100%;
    border-radius: 7px;
  }
`;

const TextContainer = styled.div`
  flex-direction: column;
  height: 50%;
  width: 70%;
  display: flex;

  textarea {
    border-radius: 7px;
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  width: 70%;
  height: 30px;

  button {
    box-shadow: 2px 2px 2px 2px gray;
    color: #ffff;
    border: none;
    background-color: #b98eff;
    border-radius: 5px;
    font-family: "oneFontTitle";
    font-size: small;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    display: flex;
  }
`;

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
    <CbestContainer>
      <MainContainer>
        <Form onSubmit={onSubmit}>
          <Title>게시물 올리기</Title>
          <Choice>
            <select>
              <option>체중감량</option>
              <option>근력강화</option>
              <option>식단조절</option>
            </select>
          </Choice>
          <InputContainer>
            <h3>제목</h3>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>
          <TextContainer>
            <h3>내용</h3>
            <textarea
              name="body"
              placeholder="내용을 입력해주세요"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </TextContainer>
          <InputContainer>
            <h3>작성자</h3>
            <input
              type="text"
              name="writer"
              placeholder="작성자를 입력해주세요"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <button type="submit">등록</button>
            <button type="button">
              <Link
                to="strap"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                목록
              </Link>
            </button>
          </ButtonContainer>
        </Form>
      </MainContainer>
    </CbestContainer>
  );
}

export default Cbest;
