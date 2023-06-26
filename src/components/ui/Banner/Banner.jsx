import React from "react";

import { Typography } from "..";

import styles from "./Banner.module.scss";

export const Banner = ({ image, title }) => (
  <section
    className={styles.banner}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className={styles.overlay} />

    <div className="layout">
      <Typography tag="h1" size="large" color="white" className={styles.title}>
        {title}
      </Typography>
    </div>
  </section>
);
