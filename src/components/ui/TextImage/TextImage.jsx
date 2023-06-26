import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./TextImage.module.scss";

export const TextImage = ({ image, title, description, alt }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlDescription = description ? md.render(description) : description;

  return (
    <div className={styles.text_image}>
      <div className="layout">
        {image ? (
          <Image src={image} alt={alt} width={1170} height={300} />
        ) : null}

        <Typography tag="h3" className={styles.title}>
          {title}
        </Typography>

        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
        />
      </div>
    </div>
  );
};
