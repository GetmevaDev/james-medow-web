import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./CourtCard.module.scss";

export const CourtCard = ({ text, svg, slug }) => (
  <Link href={`/courts-we-cover${slug}`}>
    <div className={styles.card}>
      <div className={styles.image}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_235_763)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 60C13.4341 60 0 46.5659 0 30C0 13.4341 13.4341 0 30 0C46.5659 0 60 13.4341 60 30C60 46.5659 46.5659 60 30 60ZM30 10.4868C38.2068 10.4868 44.8594 17.1394 44.8594 25.3462C44.8594 33.5528 30 49.513 30 49.513C30 49.513 15.1406 33.5528 15.1406 25.3462C15.1406 17.1394 21.7932 10.4868 30 10.4868ZM30 19.4424C33.1115 19.4424 35.6348 21.9657 35.6348 25.0774C35.6348 28.1889 33.1115 30.7122 30 30.7122C26.8885 30.7122 24.3652 28.1889 24.3652 25.0774C24.3652 21.9657 26.8885 19.4424 30 19.4424Z"
              fill="#FBB040"
            />
          </g>
          <defs>
            <clipPath id="clip0_235_763">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.text}>{text}</div>
    </div>
  </Link>
);
