import React from "react";

const Accordion = ({ items }) => {
  const RenderedItems = items.map((item) => {
    return (
      <React.Fragment>
        <div className="title active">
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
