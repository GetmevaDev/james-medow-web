import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "./Card.module.scss";

const colors = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const sizes = {
  small: styles.small,
  big: styles.big,
};

export const Card = ({
  text,
  svg,
  description,
  className,
  color,
  size = "small",
}) => (
  <div
    className={classNames(styles.card, className, colors[color], sizes[size])}
  >
    <Image
      width={svg?.data?.attributes?.width}
      height={svg?.data?.attributes?.height}
      src={svg?.data?.attributes?.url}
      className={styles.image}
      alt={svg?.data?.attributes?.name}
    />
    <div className={styles.text}>{text}</div>
    <div className={styles.description}>{description}</div>
  </div>
);
