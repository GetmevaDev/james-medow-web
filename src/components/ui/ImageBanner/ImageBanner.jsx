import classNames from "classnames";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import styles from "./ImageBanner.module.scss";

export const ImageBanner = ({
  image,
  alt,
  title,
  description,
  reverse,
  descriptionTitleBold,
  className,
  titleBlack,
  width = 500,
  height = 521,
  subText,
}) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlTitle = title ? md.render(title) : title;
  const htmlSubDescription = md.render(description);

  return (
    <div className="layout">
      <div
        className={classNames(
          styles.image_banner,
          reverse && styles.image_banner_reverse,
          className
        )}
      >
        <Image
          width={width}
          height={height}
          src={image}
          alt={alt}
          className={styles.image}
        />

        <div className={styles.right}>
          {title ? (
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: htmlTitle }}
            />
          ) : (
            <div className={styles.title_black}>{titleBlack}</div>
          )}

          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: htmlSubDescription }}
          />

          {descriptionTitleBold && (
            <div className={styles.flex}>
              <h2 className={styles.description_bold_title}>
                {descriptionTitleBold}
              </h2>

              <div className={styles.subText}>{subText}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
