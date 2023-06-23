import React from "react";

import Meta from "../seo/Meta";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import styles from "./layout.module.scss";

export const Layout = ({
  children,
  title,
  description,
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
    <header className={styles.layout}>
      <Header />
    </header>

    <main>{children}</main>

    <Footer />
  </Meta>
);
