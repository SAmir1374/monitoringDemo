import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function MyLineChart({
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
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dy={5}
            dataKey={`${DataX}`}
            tick={{ fontSize: 18, fill: "white" }}
          />
          <YAxis
            dx={-40}
            axisLine={false}
            tick={{ fontSize: 18, fill: "white" }}
          />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            name={`${labelY}`}
            type="monotone"
            dataKey={`${DataY}`}
            stroke="#1884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default MyLineChart;
