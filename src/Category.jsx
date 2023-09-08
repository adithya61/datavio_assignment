import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

export default function Category({ selectedCategory, handleCategoryChange }) {
  return (
    <>
      <h2 style={{ display: "inline", marginRight: "50px" }}>
        Select Category data
      </h2>
      <Select
        defaultValue={selectedCategory}
        style={{
          width: 200,
        }}
        onChange={handleCategoryChange}
      >
        <Option value="all categories">All Category</Option>
        <Option value="category1">Category 1</Option>
        <Option value="category2">Category 2</Option>
        <Option value="category3">Category 3</Option>
      </Select>
    </>
  );
}
