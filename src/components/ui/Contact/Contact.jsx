import Image from "next/image";
import React from "react";

import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { Typography } from "..";

import styles from "./Contact.module.scss";

export const Contact = ({ map, phone, title, address, email }) => (
  <FadeIn>
    <div className={styles.map}>
      <div className={styles.info}>
        <Typography tag="h2" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.phone}>
          <Image
            width={30}
            height={30}
            alt="phone"
            src="/images/telephone.svg"
          />
          Call Us: <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className={styles.location}>
          <Image width={30} height={30} alt="phone" src="/images/gps.svg" />
          Address: <span>{address}</span>
        </div>
        {/* <div className={styles.email}>
          <Image width={30} height={30} alt="phone" src="/images/email.svg" />
          Email: <span>{email}</span>
        </div> */}
      </div>

      <iframe
        src={map}
        title="James Medows"
        allowFullScreen=""
        loading="lazy"
        style={{ border: "none" }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </FadeIn>
);
