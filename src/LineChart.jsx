import React from "react";
import { Line } from "@ant-design/plots";

const LineChart = ({ data }) => {
  const config = {
    data,
    yField: "value",
    xField: "time",
    seriesField: "category",
    yAxis: {
      label: {
        formatter: (v) => `${v}`, // Format the yAxis labels as needed
      },
      smooth: true,
    },
  };

  return (
    <div style={{ width: "50%", flex: '1'}}>
      <h2>Line Chart Example</h2>
      <Line {...config} />
    </div>
  );
};

export default LineChart;
