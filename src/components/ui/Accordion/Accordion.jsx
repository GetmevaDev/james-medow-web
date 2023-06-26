import { useState } from "react";

export const AccordionItem = ({ description, text }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <div
        className="accordion__title"
        onClick={() => setActive(!active)}
        itemScope=""
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
      >
        <span itemProp={text}>{text}</span>
        <div className="accordion__icon">
          <i className="bx bxs-chevron-down" />
        </div>
      </div>
      <div
        className="accordion__content"
        itemScope=""
        itemProp={description}
        itemType="https://schema.org/Answer"
      >
        {description}
      </div>

      <div className="accordion__border" />
    </div>
  );
};
