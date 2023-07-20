import Image from "next/image";
import React from "react";

import { BounceIn } from "@/components/animations/BounceIn/BounceIn";

import { Typography } from "..";

import styles from "./OurProfiles.module.scss";

export const OurProfiles = ({ image, title, items, description }) => (
  <section
    className={styles.profiles}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="layout">
      <Typography tag="h2" color="white" className={styles.title}>
        {title}
      </Typography>

      <BounceIn>
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
      </BounceIn>
    </div>
  </section>
);
