import MarkdownIt from "markdown-it";
import React from "react";

import { Typography } from "..";

import styles from "./Credentials.module.scss";

export const Credentials = ({
  title,
  description,
  leftColumn,
  leftColumnName,
  rightColumnName,
  rightColumn,
}) => (
  <div className={styles.credentials}>
    <Typography tag="h2" color="primary" className={styles.title}>
      {title}
    </Typography>

    <div className={styles.description}>{description}</div>

    <div className={styles.main}>
      <ul className={styles.list}>
        <div className={styles.column_name}>{leftColumnName}</div>
        {leftColumn?.map((item) => (
          <li className={styles.text} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>

      <ul className={styles.list}>
        <div className={styles.column_name}>{rightColumnName}</div>

        {rightColumn?.map((item) => (
          <li className={styles.text} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
