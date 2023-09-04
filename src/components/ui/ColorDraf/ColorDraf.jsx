import MarkdownIt from "markdown-it";
import React from "react";

import styles from "./ColorDraf.module.scss";

export const ColorDraf = ({ description }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlDescription = md.render(description);

  return (
    <div className={styles.color}>
      <div className="layout">
        <div
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
          className={styles.text}
        />
      </div>
    </div>
  );
};
