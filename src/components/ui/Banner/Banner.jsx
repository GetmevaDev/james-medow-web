import MarkdownIt from "markdown-it";
import React from "react";

import { Form, Typography } from "..";

import styles from "./Banner.module.scss";

export const Banner = ({ image, title }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlTitle = md.render(`
  Call Us At <a href="tel: 917-856-1247">**917-856-1247**</a>
 Or Have Us Call You Back.`);

  return (
    <>
      <section
        className={styles.banner}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.overlay} />

        <div className="layout">
          <div className={styles.info}>
            <div>
              <Typography
                tag="h1"
                size="large"
                color="white"
                className={
                  title.length > 20 ? styles.title_width : styles.title
                }
              >
                {title}
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <div className="layout">
        <div className={styles.form}>
          <Form htmlSubCall={htmlTitle} />
        </div>
      </div>
    </>
  );
};
