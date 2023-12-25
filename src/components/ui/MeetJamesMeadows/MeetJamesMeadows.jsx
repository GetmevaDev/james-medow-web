import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import styles from "./MeetJamesMeadows.module.scss";

export const MeetJamesMeadows = ({ title, description, image }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlSubTItle = md.render(title);

  return (
    <div className={styles.meet}>
      <div className={styles.left}>
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: htmlSubTItle }}
        />
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.right}>
        <Image src={image} alt="meet james meadows" width={528} height={612} />
      </div>
    </div>
  );
};
