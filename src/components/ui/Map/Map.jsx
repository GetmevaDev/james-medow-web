import Image from "next/image";
import React from "react";

import styles from "./Map.module.scss";

export const Map = ({ map, phone, address, email }) => (
  <div className={styles.map}>
    <iframe
      src={map}
      title="James Medows"
      allowFullScreen=""
      style={{ border: "none" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    <div className={styles.info}>
      <div className={styles.phone}>
        <Image width={30} height={30} alt="phone" src="/images/telephone.svg" />
        {phone}
      </div>
      <div className={styles.location}>
        <Image width={30} height={30} alt="phone" src="/images/gps.svg" />
        {address}
      </div>
      <div className={styles.email}>
        <Image width={30} height={30} alt="phone" src="/images/email.svg" />
        {email}
      </div>
    </div>
  </div>
);
