import classNames from "classnames";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./ImageBannerText.module.scss";

const sizes = {
  reverse: styles.reverse,
  default: styles.default,
};

const colors = {
  white: styles.white,
  gray: styles.gray,
};

export const ImageBannerText = ({
  image,
  title,
  description,
  alt,
  width,
  height,
  size = "default",
  className,
  color = "gray",
}) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlSubDescription = md.render(description);

  return (
    <div className={classNames(styles.image_banner, className, colors[color])}>
      <div className="layout">
        <div className={classNames(styles.main, className, sizes[size])}>
          <div className={styles.left}>
            <Image
              width={width}
              height={height}
              src={image}
              alt="image-banner"
              className={styles.img}
            />
          </div>

          <div className={styles.right}>
            <Typography tag="h2" className={styles.title}>
              {title}
            </Typography>

            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: htmlSubDescription }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
