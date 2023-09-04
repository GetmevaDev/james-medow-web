import MarkdownIt from "markdown-it";
import React from "react";

import styles from "./TextDraf.module.scss";

export const TextDraf = ({ description }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlDescription = md.render(description);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlDescription }}
      className={styles.text}
    />
  );
};
