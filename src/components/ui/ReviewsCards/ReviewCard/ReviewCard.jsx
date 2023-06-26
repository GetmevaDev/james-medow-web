import Image from "next/image";
import React from "react";

import styles from "./ReviewCard.module.scss";

export const ReviewCard = ({ description, name }) => (
  <div className={styles.card}>
    <Image src="/images/stars.svg" alt="start" width={107} height={18} />

    <div className={styles.description}>{description}</div>
    <div className={styles.sub}>{name}</div>
  </div>
);
