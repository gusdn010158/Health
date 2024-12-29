import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import loone from "../img/loone.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px gray;
  box-sizing: border-box;
  border-radius: 30px;
  height: 300px;
  margin: 25px;
  min-width: 20%;
  border: none;
  background-color: #ffff;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;

const Thumbnail = styled.div`
  .content_thumbnail img {
    max-width: 100%;
    height: auto;
  }
`;

const Description = styled.div`
  font-size: 10px;
  margin: 5px;
`;

const Writer = styled.div`
  margin: 5px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DeleteButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const Cmain_map = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/names")
      .then((response) => response.json())
      .then((data) => {
        setName(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/names/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setName(name.filter((item) => item.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    <>
      {name.map((names) => (
        <Container key={names.id}>
          <StyledLink to={`/Community/${names.id}`}>
            <Title>{names.title}</Title>

            <Thumbnail>
              <img src={loone} alt="content_thumbnail" />
            </Thumbnail>

            <Description>{names.body}</Description>
            <Writer>작성자 : {names.writer}</Writer>
          </StyledLink>
          <DeleteButton onClick={() => handleDelete(names.id)}>x</DeleteButton>
        </Container>
      ))}
    </>
  );
};

export default Cmain_map;
