/* eslint-disable jsx-a11y/label-has-associated-control */
import MarkdownIt from "markdown-it";
import React from "react";

import { useMediaQuery } from "@/components/hooks";

import { Button, VideoBackground } from "..";

import { Form } from "./Form/Form";

import styles from "./HomeBanner.module.scss";

export const HomeBanner = ({
  image,
  title,
  subTitle,
  button,
  buttonLink,
  callUs,
}) => {
  const md = new MarkdownIt({
    html: true,
  });

  const isMatches = useMediaQuery("(max-width: 1024px)");

  const htmlTitle = md.render(title);
  const htmlSubTItle = md.render(subTitle);
  const htmlSubCall = md.render(callUs);

  return (
    <div className={styles.banner}>
      <div className={styles.video}>
        <VideoBackground />
      </div>
      <div className="layout">
        <div className={styles.info}>
          <div className={styles.info_inner}>
            <div
              dangerouslySetInnerHTML={{ __html: htmlTitle }}
              className={styles.title}
            />
            <div
              dangerouslySetInnerHTML={{ __html: htmlSubTItle }}
              className={styles.sub_title}
            />

            <a href={`${buttonLink}`} className={styles.button}>
              <Button variant="secondary">{button}</Button>
            </a>
          </div>
          <div className={styles.form}>
            {!isMatches && <Form htmlSubCall={htmlSubCall} />}
          </div>
        </div>
        {isMatches && <Form htmlSubCall={htmlSubCall} />}
      </div>
    </div>
  );
};
