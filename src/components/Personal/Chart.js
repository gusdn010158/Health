import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartContainer = styled.div`
  border-radius: 1rem;
  font-weight: bolder;
  padding: 2rem 2rem 1rem 0;
  margin: 3rem 0 0 5rem;
  box-shadow: 5px 5px 20px lightgray;
`;

const data = [
  { day: "1일", kg: 80 },
  { day: "5일", kg: 79.8 },
  { day: "10일", kg: 79 },
  { day: "15일", kg: 78.8 },
  { day: "20일", kg: 78.5 },
  { day: "25일", kg: 78 },
  { day: "30일", kg: 77.6 },
];

export default function Chart() {
  return (
    <ChartContainer>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={[76, 82]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="kg" stroke="rgb(203, 170, 254)" />
      </LineChart>
    </ChartContainer>
  );
}
