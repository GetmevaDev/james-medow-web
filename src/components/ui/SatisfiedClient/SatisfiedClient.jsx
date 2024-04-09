import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./SatisfiedClient.module.scss";

const Slider = dynamic(() => import("../Slider/Slider"));
const Danger = dynamic(() => import("@/components/ui/Danger/Danger"));

const SatisfiedClient = ({ image, title, items }) => (
  <section
    className={styles.satisfied}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="layout">
      <div className={styles.top}>
        <Typography tag="h2" color="white">
          {title}
        </Typography>
      </div>

      <p className={styles.description}>
        Our satisfied clients often share stories of success where their court
        date turned into a moment of relief. Many have seen steep fines reduced
        or even avoided altogether, thanks to our teams efforts to get their
        ticket reduced. They frequently highlight how our extremely professional
        approach not only brought them favorable outcomes but also provided
        peace of mind during what can be a stressful process.
      </p>

      <div className={styles.bottom}>
        <div>
          <p className={styles.rated}>Top rated on:</p>
          <div className={styles.images}>
            <Image
              width={146}
              height={71}
              src="/images/google.png"
              alt="google"
            />
            <Image
              width={99}
              height={72}
              src="/images/avvo.png"
              alt="avva"
              className={styles.box_image}
            />
            <Image width={177} height={71} src="/images/yelp.png" alt="yelp" />

            <Danger />
          </div>
        </div>
        <div className={styles.slider}>
          <Slider items={items} />
        </div>
      </div>
    </div>
  </section>
);

export default SatisfiedClient;
