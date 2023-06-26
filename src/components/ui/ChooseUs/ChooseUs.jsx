import React from "react";

import { Card, Typography } from "..";

import styles from "./ChooseUs.module.scss";

export const ChooseUs = ({ title, description, items }) => (
  <div className={styles.choose}>
    <Typography tag="h2">{title}</Typography>

    <div className={styles.description}>{description}</div>

    <div className={styles.cards}>
      {items?.map((item) => (
        <Card key={item.id} {...item} color="primary" />
      ))}
    </div>
  </div>
);
