import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Scatter } from "@ant-design/plots";

const BubbleChart = ({ data }) => {
  const config = {
    appendPadding: 10,
    data,
    xField: "time",
    yField: "val",
    shape: "circle",
    colorField: "category",
    size: 4,
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: "#aaa",
        },
      },
    },
    xAxis: {
      min: -100,
      grid: {
        line: {
          style: {
            stroke: "#eee",
          },
        },
      },
      line: {
        style: {
          stroke: "#aaa",
        },
      },
    },
  };

  return (
    <div style={{ flex: "1" }}>
      <h2>BubbleChart Example</h2>
      <Scatter {...config} />;
    </div>
  );
};

export default BubbleChart;
