import React from "react";
import Accordion from "./components/Accordion";

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

export default () => {
  return (
    <h1>
      <Accordion items={items} />
    </h1>
  );
};
