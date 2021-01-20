import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [ActiveIndex, SetActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    SetActiveIndex(index);
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
  return (
    <div className="ui styled accordion">
      {RenderedItems}
      {ActiveIndex}
    </div>
  );
};

export default Accordion;
