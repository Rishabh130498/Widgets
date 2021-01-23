import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React ?",
    content: "React is javascript frontend Library",
  },
  {
    title: "Why use React ?",
    content: "React is favourite JS library among Engineers",
  },
  {
    title: "How do you use React ?",
    content: "You can use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "Red",
  },
  {
    label: "The color Green",
    value: "Green",
  },
  {
    label: "The color Orange",
    value: "Orange",
  },
];

export default () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
