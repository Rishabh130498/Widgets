import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [ActiveIndex, SetActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    SetActiveIndex(index);
  };

  const RenderedItems = items.map((item, index) => {
    const Active = index === ActiveIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${Active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${Active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{RenderedItems}</div>;
};

export default Accordion;
