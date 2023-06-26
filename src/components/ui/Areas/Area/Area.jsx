import Link from "next/link";
import React from "react";

import styles from "./Area.module.scss";

export const Area = ({ text, url }) => (
  <Link href={`/practice-areas/${url}`} className={styles.area}>
    <div className={styles.url}>{text}</div>
  </Link>
);
