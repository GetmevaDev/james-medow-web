import Image from "next/image";
import React from "react";

import styles from "./MeetJamesMeadows.module.scss";

export const MeetJamesMeadows = ({ title, description, image }) => (
  <div className={styles.meet}>
    <div className={styles.left}>
      <div className={styles.title}>
        Meet <br /> James Meadows
      </div>
      <div className={styles.description}>{description}</div>
    </div>
    <div className={styles.right}>
      <Image src={image} alt="meet james meadows" width={528} height={612} />
    </div>
  </div>
);
