import MarkdownIt from "markdown-it";
import React from "react";

import styles from "./RepresentationCard.module.scss";

export const RepresentationCard = ({ name, description }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlDescription = description ? md.render(description) : description;

  return (
    <div className={styles.item}>
      <div className={styles.item_title}>{name}</div>
      <div
        className={styles.item_description}
        dangerouslySetInnerHTML={{ __html: htmlDescription }}
      />
    </div>
  );
};
