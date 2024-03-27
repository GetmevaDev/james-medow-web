import Image from "next/image";
import React from "react";

import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { Card, Typography } from "..";

import styles from "./ChooseUs.module.scss";

const ChooseUs = ({ title, description, items }) => (
  <FadeIn>
    <div className={styles.choose}>
      <div className={styles.title_inner}>
        <Typography tag="h2">{title}</Typography>
      </div>

      <div className={styles.description}>
        <div className={styles.description_info}>{description}</div>
        <div className={styles.image}>
          <Image
            width={397}
            height={393}
            src="/images/homepage_judge.svg"
            alt="dismissed"
          />
        </div>
      </div>

      <div className={styles.cards}>
        {items?.map((item) => (
          <Card key={item.id} {...item} color="primary" />
        ))}
      </div>
    </div>
  </FadeIn>
);

export default ChooseUs;
