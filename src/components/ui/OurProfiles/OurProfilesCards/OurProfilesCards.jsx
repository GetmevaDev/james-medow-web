import React from "react";

import { FadeIn } from "../../../animations/FadeIn/FadeIn";
import { Card } from "../..";

import styles from "./OurProfilesCards.module.scss";

export const OurProfilesCards = ({ description, items }) => (
  <FadeIn>
    <div className={styles.profile_cards}>
      <div className={styles.description}>{description}</div>

      <div className={styles.cards}>
        {items?.map((item) => (
          <Card key={item.id} {...item} color="secondary" />
        ))}
      </div>
    </div>
  </FadeIn>
);
