/* eslint-disable jsx-a11y/label-has-associated-control */
import MarkdownIt from "markdown-it";
import React from "react";

import { Button } from "..";

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

  const htmlTitle = md.render(title);
  const htmlSubTItle = md.render(subTitle);
  const htmlSubCall = md.render(callUs);
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay} />

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

            <a href={`${buttonLink}`}>
              <Button>{button}</Button>
            </a>
          </div>

          <Form htmlSubCall={htmlSubCall} />
        </div>
      </div>
    </section>
  );
};
