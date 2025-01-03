import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const StyledTodoList = styled.ul`
  padding: 0;

  li {
    background-color: white;
    padding: 15px 30px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    list-style: none;

    span {
      margin-right: 25px;
      cursor: pointer;
    }

    &.on span {
      color: black;
    }

    em {
      cursor: pointer;
    }

    &.on em {
      color: black;
      text-decoration: line-through rgb(159, 127, 231);
    }

    button {
      float: right;
      color: rgb(175, 169, 169);
    }
  }
`;

const TodoList = ({ todos, onDel, onToggle }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todos={todo}
          onDel={onDel}
          onToggle={onToggle}
        />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
