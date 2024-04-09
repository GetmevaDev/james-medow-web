import React from "react";

import { useMediaQuery } from "@/components/hooks";

import styles from "./Video.module.scss";

const VideoBackground = ({ title, image, style }) => {
  const isMatches = useMediaQuery("(max-width: 480px)");

  return (
    <div className={styles.video_background}>
      {title ? (
        <section
          className={styles.banner}
          style={{
            backgroundImage: `url(${image})`,
            minHeight: style?.height,
            top: style?.top,
          }}
        >
          <div className={styles.overlay} />
        </section>
      ) : (
        <video
          muted
          autoPlay
          playsInline
          loop
          className={styles.video}
          src="/video/bg.mov"
        />
      )}
    </div>
  );
};

export default VideoBackground;
