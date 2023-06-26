import React from "react";

import { Area } from "./Area/Area";

import styles from "./Areas.module.scss";

export const Areas = ({ areas }) => (
  <div className={styles.areas}>
    {areas?.map((area) => (
      <Area key={area.id} {...area} />
    ))}
  </div>
);
