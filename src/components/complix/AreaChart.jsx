import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MyAreaChart({
  className,
  data,
  DataY = "countPer100",
  DataX = "deviceName",
  labelY = "عملکرد",
  ...props
}) {
  return (
    <>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className={`${className}`}
      >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis
            dy={5}
            dataKey={`${DataX}`}
            tick={{ fontSize: 18, fill: "white" }}
          />
          <YAxis dx={-40} tick={{ fontSize: 18, fill: "white" }} />
          <Tooltip />
          <Area
            type="monotone"
            name={`${labelY}`}
            dataKey={`${DataY}`}
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default MyAreaChart;
