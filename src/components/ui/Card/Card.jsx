import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "./Card.module.scss";

const colors = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Card = ({ text, svg, className, color }) => (
  <div className={classNames(styles.card, className, colors[color])}>
    <Image
      width={svg?.data?.attributes?.width}
      height={svg?.data?.attributes?.height}
      src={svg?.data?.attributes?.url}
      className={styles.image}
      alt={svg?.data?.attributes?.name}
    />
    <div className={styles.text}>{text}</div>
  </div>
);
