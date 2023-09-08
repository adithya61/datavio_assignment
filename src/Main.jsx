import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import * as parseData from "./dummyData";
import Category from "./Category";
import BubbleChart from "./BubbleChart";

const Main = () => {
  // Define state variables for category selection and data
  const [selectedCategory, setSelectedCategory] = useState("all categories");
  const [chartData, setChartData] = useState([]);
  const [ScatterData, setScatterData] = useState("all categories");

  useEffect(() => {
    // Line Chart data
    const chart = parseData.getChartData(selectedCategory);
    setChartData(chart);

    // Scatter Chart data
    const scatter = parseData.getScatterData(selectedCategory);
    setScatterData(scatter);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div
      className="header"
        style={{
          border: "1px solid #000",
          width: "fit-content",
          padding: "25px",
        }}
      >
        <h1>Welcom Test User !</h1>
        <h3>Check Category Data Below</h3>
      </div>
      <Category
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div style={{ display: "flex" }}>
        <LineChart data={chartData} />
        <BubbleChart data={ScatterData} />
      </div>
    </div>
  );
};

export default Main;
