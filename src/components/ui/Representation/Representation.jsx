import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { Button, Typography } from "..";

import { RepresentationCard } from "./Card/RepresentationCard";

import styles from "./Representation.module.scss";

export const Representation = ({
  title,
  bigPhoto,
  smallPhoto,
  items,
  button,
  reverse,
  buttonText,
  subText,
}) => (
  <div>
    <div className={styles.representation}>
      {!reverse ? (
        <Typography tag="h2" color="primary" className={styles.title}>
          {title}
        </Typography>
      ) : (
        <div className="layout">
          <Typography tag="h2" color="primary" className={styles.title_reverse}>
            {title}
          </Typography>

          <p className={styles.desc}>{subText}</p>
        </div>
      )}
      <div className={classNames(!reverse ? styles.main : styles.main_reverse)}>
        <div className={styles.left}>
          {!reverse ? (
            <Image
              src={bigPhoto}
              className={styles.big_photo}
              alt="track"
              width={912}
              height={754}
            />
          ) : (
            <Image
              src={bigPhoto}
              className={styles.small_photo}
              alt="track"
              width={769}
              height={666}
            />
          )}
        </div>

        <div className={!reverse ? styles.right : styles.right_reverse}>
          {!reverse && (
            <Image
              src={smallPhoto}
              className={styles.small_photo}
              alt="police"
              width={600}
              height={234}
            />
          )}
          <div className={!reverse ? styles.grid : styles.grid_reverse}>
            {items?.map((item) => (
              <RepresentationCard key={item.id} {...item} />
            ))}
          </div>

          {!reverse && <Button>{button}</Button>}
        </div>
      </div>
    </div>

    <div className="layout">
      <div className={styles.sub_text}>{buttonText}</div>
    </div>
  </div>
);
