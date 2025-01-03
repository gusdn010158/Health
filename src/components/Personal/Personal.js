import React, { useRef, useState } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Chart from "./Chart";
import Header from "../Header";
import Calendar from "react-calendar";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import TileContent from "./TileContent";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Todos = styled.div`
  border-radius: 1rem;
  margin: 3rem 0 3rem 5rem;
  box-shadow: 5px 5px 20px lightgray;

  h1 {
    background: rgb(203, 170, 254);
    font-family: "oneFontTitle";
    text-align: center;
    padding: 25px 0;
    font-size: 20px;
    color: white;
    border-radius: 10px 10px 50% 50%;
  }
`;

const StyledLink = styled(Link)`
  background: rgb(203, 170, 254);
  padding: 25px;
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-left: 30px;
`;

const StyledCalendar = styled(Calendar)`
  border-radius: 1rem;
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px lightgray;
  height: 35rem;
  width: 45rem;

  .sundayTile {
    color: red;
  }

  .saturdayTile {
    color: blue;
  }

  .react-calendar__navigation button {
    min-width: 100px;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .currentMonthTile,
  button.sundayTile,
  button.saturdayTile {
    padding: 5px;
    padding-bottom: 1rem;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year,
  .react-calendar__century-view__decades__decade {
    color: black;
  }

  .react-calendar__tile--now {
    background-color: rgb(255, 205, 213);
  }

  .react-calendar__navigation__label > span {
    font-size: 20px;
    font-weight: bold;
  }

  .react-calendar__month-view__weekdays {
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #b8b6b6;
  }

  .react-calendar__tile {
    border: 0.5px solid #cccccc;
    text-align: center;
  }

  .react-calendar__tile:enabled:hover {
    background-color: #f8f8fa;
  }

  .react-calendar__tile:enabled:focus {
    background-color: rgb(203, 170, 254);
  }
`;

const Personal = () => {
  const no = useRef(1);

  const [todos, setTodos] = useState([]);
  const [value, onChange] = useState(new Date());

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text: text,
        done: false,
      },
    ]);
  };

  const onDel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  const tileClassName = ({ date }) => {
    if (date.getDay() === 0) {
      return "sundayTile";
    } else if (date.getDay() === 6) {
      return "saturdayTile";
    } else if (date.getMonth() === value.getMonth()) {
      return "currentMonthTile";
    }
    return null;
  };

  return (
    <div>
      <Header />
      <Container>
        <LeftSide>
          <span>
            <Chart />
          </span>
          <Todos>
            <h1>TODO LIST</h1>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
          </Todos>
        </LeftSide>
        <div>
          <StyledCalendar
            className="calendar-parent"
            value={value}
            onChange={onChange}
            locale="en-US"
            nextLabel={<HiChevronRight />}
            prevLabel={<HiChevronLeft />}
            next2Label={null}
            prev2Label={null}
            tileClassName={tileClassName}
            tileContent={({ date }) => (
              <TileContent date={date} tileClassName={tileClassName} />
            )}
          />
          <StyledLink to="/Home">내 정보로</StyledLink>
        </div>
      </Container>
    </div>
  );
};

export default Personal;
