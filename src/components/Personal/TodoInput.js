import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdAddCircle } from "react-icons/md";

const Form = styled.form`
  background-color: white;
  text-align: center;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #cdcdcd;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  margin-top: 25px;
  margin-left: 20px;
`;

const Icon = styled(MdAddCircle)`
  color: rgb(203, 170, 254);
`;

const TodoInput = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState("");

  const changeInput = (evt) => {
    const { value } = evt.target;
    setText(value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault(); // 새로고침 방지

    if (!text) return; // text에 아무것도 없을 때 - 공백 입력 방지

    onAdd(text);

    setText("");
    textRef.current.focus();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" value={text} onChange={changeInput} ref={textRef} />
      <Button>
        <Icon size="50" />
      </Button>
    </Form>
  );
};

export default TodoInput;
