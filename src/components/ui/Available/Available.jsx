import React from "react";

import { Map, Typography } from "..";

import styles from "./Available.module.scss";

export const Available = ({ title, items }) => (
  <div className={styles.available}>
    <Typography>{title}</Typography>

    <div className={styles.maps}>
      {items?.map((item) => (
        <Map key={item.id} {...item} />
      ))}
    </div>
  </div>
);
