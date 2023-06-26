import MarkdownIt from "markdown-it";
import React from "react";

import styles from "./Description.module.scss";

export const Description = ({ description }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlDescription = md.render(description);

  return (
    <div className="layout">
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: htmlDescription }}
      />
    </div>
  );
};
