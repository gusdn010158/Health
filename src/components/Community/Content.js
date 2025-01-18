import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Writer from "./Writer";
import data from "../../json-server/db.json";

const ContentContainer = styled.div`
  height: 950px;
  overflow-y: scroll;
`;

const ContentBody = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentTitle = styled.div`
  display: flex;
  width: 70%;
  height: 120px;
  background-color: azure;
  align-items: center;
`;

const ContentTitlePic = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  background-color: darkgray;
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

const ContentTitleText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentTitleName = styled.div`
  font-size: small;
`;

const ContentTitleHeading = styled.div`
  font-weight: 800;
  font-size: large;
`;

const ContentContent = styled.div`
  padding: 30px;
  width: 70%;
  height: 400px;
`;

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
    <ContentContainer>
      <ContentBody>
        <ContentTitle>
          <ContentTitlePic />
          <ContentTitleText>
            <ContentTitleHeading>{names.title}</ContentTitleHeading>
            <ContentTitleName>작성자: {names.writer}</ContentTitleName>
          </ContentTitleText>
        </ContentTitle>

        <ContentContent>{names.body}</ContentContent>

        <Writer />
      </ContentBody>
    </ContentContainer>
  );
}

export default Content;
