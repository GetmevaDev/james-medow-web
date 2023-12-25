import classNames from "classnames";
import React from "react";

import { AccordionItem } from "../Accordion/Accordion";
import { Typography } from "..";

import styles from "./Faq.module.scss";

const positions = {
  left: styles.left,
  center: styles.center,
};

export const Faq = ({ title, items, position = "center" }) => (
  <div className={styles.faq}>
    <Typography tag="h2" className={classNames(positions[position])}>
      {title}
    </Typography>

    <div className={styles.accordion}>
      {items?.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
