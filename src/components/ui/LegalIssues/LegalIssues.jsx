import React from "react";

import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { Card, Typography } from "..";

import styles from "./LegalIssues.module.scss";

export const LegalIssues = ({ title, description, items }) => (
  <FadeIn>
    <div className={styles.legal}>
      <div className={styles.title_inner}>
        <Typography tag="h2" className={styles.title}>
          {title}
        </Typography>
      </div>

      <div className={styles.description}>
        <div className={styles.description_info}>{description}</div>
      </div>

      <div className={styles.cards}>
        {items?.map((item) => (
          <Card key={item.id} {...item} color="primary" size="big" />
        ))}
      </div>
    </div>
  </FadeIn>
);
