import classNames from "classnames";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Text.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

export const Text = ({
  className,
  title,

  description,
  color = "gray",
}) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlDescription = description ? md.render(description) : description;

  return (
    <div className={classNames(styles.text, className, colors[color])}>
      <div className="layout">
        <Typography tag="h2" className={styles.title}>
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
