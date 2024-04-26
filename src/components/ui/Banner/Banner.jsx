import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Banner.module.scss";

const Form = dynamic(() => import("@/components/ui/Form/Form"));

export const Banner = ({
  image,
  title,
  style,
  description,
  buttonLink,
  button,
  top,
  buttons,
}) => {
  const router = useRouter();
  const md = new MarkdownIt({
    html: true,
  });

  const shouldShowForm = !/^\/blog\/[^/]+/.test(router.pathname);

  const htmlTitle = md.render(`
  Call Us At <a href="tel: 917-856-1247">**917-856-1247**</a>
 Or Have Us Call You Back.`);

  return (
    <>
      <section
        className={styles.banner}
        style={{
          backgroundImage: `url(${image})`,
          minHeight: style?.height,
          top: style?.top,
        }}
      >
        <div className={styles.overlay} />

        <div className="layout">
          {description ? (
            <div className={styles.info_description}>
              <div>
                <Typography
                  tag="h1"
                  size="large"
                  top={top}
                  color="white"
                  className={styles.title_description}
                >
                  {title}
                </Typography>
              </div>

              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <a href={`${buttonLink}`} className={styles.button_link}>
                <Button variant="secondary">{button}</Button>
              </a>
            </div>
          ) : (
            <div className={styles.info}>
              <div>
                <h1
                  className={
                    title.length > 20 ? styles.title_width : styles.title
                  }
                  dangerouslySetInnerHTML={{ __html: title }}
                />

                {buttons && (
                  <div className={styles.buttons}>
                    <Button type="button" variant="primary">
                      {button}
                    </Button>
                    <a href="tel: 929-207-9291" className={styles.link}>
                      <Button type="button" variant="secondary">
                        {buttonLink}
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* <div className="layout">
        {shouldShowForm && (
          <div className={styles.form}>
            <Form htmlSubCall={htmlTitle} />
          </div>
        )}
      </div> */}
    </>
  );
};
