import classNames from "classnames";
import React from "react";

import Meta from "../seo/Meta";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import styles from "./layout.module.scss";

const sizes = {
  layout: styles.layout,
  nolayout: styles.nolayout,
};

export const Layout = ({
  children,
  title,
  description,
  size = "nolayout",
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  image,
}) => (
  <Meta
    title={title}
    description={description}
    twitterCard={twitterCard}
    twitterDescription={twitterDescription}
    twitterDomain={twitterDomain}
    twitterImage={twitterImage}
    twitterTitle={twitterTitle}
    twitterUrl={twitterUrl}
    image={image}
  >
    <header>
      <Header />
    </header>

    <main className={classNames(styles.layout, sizes[size])}>{children}</main>

    <Footer />
  </Meta>
);
