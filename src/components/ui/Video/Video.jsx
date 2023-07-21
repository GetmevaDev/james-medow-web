import React, { useRef } from "react";

import { useMediaQuery } from "@/components/hooks";

import styles from "./Video.module.scss";

export const VideoBackground = () => {
  const isMatches = useMediaQuery("(max-width: 480px)");

  return (
    <div className={styles.video_background}>
      {!isMatches ? (
        <video
          muted
          autoPlay
          playsInline
          loop
          className={styles.video}
          src="/video/bg.mov"
        />
      ) : (
        <video
          muted
          autoPlay
          playsInline
          loop
          className={styles.video}
          src="/video/mobile-test2.mp4"
        />
      )}
    </div>
  );
};
