import React, { useRef } from "react";

import styles from "./Video.module.scss";

export const VideoBackground = () => (
  <div className={styles.video_background}>
    <video
      muted
      autoPlay
      playsInline
      loop
      className={styles.video}
      src="/video/bg.mov"
    />
  </div>
);
