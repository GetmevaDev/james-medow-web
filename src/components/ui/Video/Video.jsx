import React, { useRef } from "react";

import styles from "./Video.module.scss";

export const VideoBackground = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className={styles.video_background}>
      <video
        muted
        autoPlay
        className={styles.video}
        src="/video/bg.mov"
        onEnded={handleVideoEnd}
        ref={videoRef}
      />
    </div>
  );
};
