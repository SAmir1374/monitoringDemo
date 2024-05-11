import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

function MyBarChart({
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
        <BarChart
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
          <YAxis dx={-40} tick={{ fontSize: 18, fill: "white" }} />
          <Tooltip />
          {/* <Legend /> */}
          <Bar
            name={`${labelY}`}
            dataKey={`${DataY}`}
            barSize={20}
            fill="#8884d8"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default MyBarChart;
