import React from "react";

const Accordion = ({ items }) => {
  const onTitleClicked = (index) => {
    console.log("Titled clicked", index);
  };

  const RenderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClicked(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{RenderedItems}</div>;
};

export default Accordion;
