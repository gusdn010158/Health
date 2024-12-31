import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import styled from "styled-components";

const ListItem = styled.li`
  border-radius: 10px;
`;

const Text = styled.span`
  &.completed {
    text-decoration: line-through;
    color: black;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const TodoItem = ({ todos, onDel, onToggle }) => {
  const { id, text, done } = todos;

  return (
    <div>
      <ListItem className={done ? "on" : ""}>
        <span onClick={() => onToggle(id)}>
          {done ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        </span>
        <Text onClick={() => onToggle(id)} className={done ? "completed" : ""}>
          {text}
        </Text>
        <Button onClick={() => onDel(id)}>
          <FaRegTrashAlt />
        </Button>
      </ListItem>
    </div>
  );
};

export default TodoItem;
