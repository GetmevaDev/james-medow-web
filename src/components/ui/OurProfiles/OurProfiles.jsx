import Image from "next/image";
import React from "react";

import { BounceIn } from "@/components/animations/BounceIn/BounceIn";

import { Typography } from "..";

import styles from "./OurProfiles.module.scss";

const OurProfiles = ({ image, title, items, description }) => (
  <section
    className={styles.profiles}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="layout">
      <Typography tag="h2" color="white" className={styles.title}>
        {title}
      </Typography>

      {/* <p className={styles.description}>At the Law Office of James Medows, our goal is to provide great legal representation without sacrificing customer service, offering a no obligation consultation to all prospective clients. We represent clients across a spectrum of traffic-related issues, from moving violations to more serious concerns like a suspended license. Having represented tens of thousands of clients over the years, we recognize that each case is unique, with individual wants and needs. Rest assured, we are committed to doing our utmost to achieve the best possible results for your traffic ticket and broader legal needs.</p> */}

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

export default OurProfiles;
