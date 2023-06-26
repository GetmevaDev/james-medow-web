import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import styles from "./ImageBanner.module.scss";

export const ImageBanner = ({ image, alt, title, description }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlTitle = title ? md.render(title) : title;
  const htmlSubDescription = md.render(description);

  return (
    <div className="layout">
      <div className={styles.image_banner}>
        <Image width={500} height={521} src={image} alt={alt} />

        <div className={styles.right}>
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: htmlTitle }}
          />

          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: htmlSubDescription }}
          />
        </div>
      </div>
    </div>
  );
};
