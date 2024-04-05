import classNames from "classnames";
import { memo } from "react";

import Meta from "../seo/Meta";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { HeaderTest } from "./HeaderTest/HeaderTest";

import styles from "./layout.module.scss";

const sizes = {
  layout: styles.layout,
  nolayout: styles.nolayout,
};

export const Layout = memo(
  ({
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
    isActive,
    menus,
    data,
    courts,
    setIsActive,
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
      <Header menus={menus} />
      <main className={classNames(styles.layout, sizes[size])}>{children}</main>

      <Footer
        isActive={isActive}
        setIsActive={setIsActive}
        data={data}
        courts={courts}
      />
    </Meta>
  )
);
