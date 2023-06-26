import React from "react";

import { AccordionItem } from "../Accordion/Accordion";
import { Typography } from "..";

import styles from "./Faq.module.scss";

export const Faq = ({ title, items }) => (
  <div className={styles.faq}>
    <Typography tag="h2">{title}</Typography>

    <div className={styles.accordion}>
      {items?.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
