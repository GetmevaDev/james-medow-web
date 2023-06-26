import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./OurProfiles.module.scss";

export const OurProfiles = ({ image, title, items, description }) => (
  <section
    className={styles.profiles}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="layout">
      <Typography tag="h2" color="white">
        {title}
      </Typography>

      <div className={styles.cards}>
        {items?.map((item) => (
          <div className={styles.card} key={item.id}>
            <Image
              width={item?.company_image?.data?.attributes?.width}
              height={item?.company_image?.data?.attributes?.height}
              src={item?.company_image?.data?.attributes?.url}
              alt={item?.company_image?.data?.attributes?.alternativeText}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
