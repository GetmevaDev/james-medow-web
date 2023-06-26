import Image from "next/image";
import React from "react";

import { Typography } from "..";

import { ReviewCard } from "./ReviewCard/ReviewCard";

import styles from "./ReviewsCards.module.scss";

export const ReviewsCards = ({ title, cards }) => (
  <div className={styles.cards}>
    <Typography tag="h2" className={styles.title}>
      {title}
    </Typography>

    <div className={styles.images}>
      <Image
        width={146}
        height={71}
        src="/images/google-stars.svg"
        alt="google"
      />
      <Image
        width={99}
        height={72}
        src="/images/avvo.png"
        alt="avva"
        className={styles.box_image}
      />
      <Image width={177} height={71} src="/images/yelp.png" alt="yelp" />
    </div>
    <div className={styles.cards_inner}>
      {cards?.map((card) => (
        <ReviewCard key={card.id} {...card} />
      ))}
    </div>
  </div>
);
