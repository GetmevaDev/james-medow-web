import Head from "next/head";
import { useRouter } from "next/router";
import React, { memo } from "react";

const Meta = memo(
  ({
    title,
    description,
    children,
    twitterCard,
    twitterDomain,
    twitterUrl,
    twitterTitle,
    twitterDescription,
    twitterImage,
    image,
  }) => {
    const router = useRouter();
    const canonicalUrl = `https://trafficticketlawyernewyork.com${router.asPath}`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/svg/logo.svg" />
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="googlebot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="bingbot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="msvalidate.01"
            content="EA9BE877CBA41650EB0DB2E0600A47BD"
          />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:type" content="website" />
          {title && <meta name="og:title" content={title} key="title" />}
          {description && (
            <meta name="description" content={description} key="description" />
          )}
          {description && (
            <meta
              name="og:description"
              content={description}
              key="og:description"
            />
          )}
          {image && <meta property="og:image" content={image} key="og:image" />}

          {twitterUrl && (
            <meta property="og:url" content={twitterUrl} key="og:url" />
          )}
          {twitterUrl && (
            <meta
              property="twitter:url"
              content={twitterUrl}
              key="twitter:url"
            />
          )}
          {twitterCard && (
            <meta
              name="twitter:card"
              content={twitterCard}
              key="twitter:card"
            />
          )}
          {twitterDomain && (
            <meta
              property="twitter:domain"
              content={twitterDomain}
              key="twitter:domain"
            />
          )}
          {twitterTitle && (
            <meta
              name="twitter:title"
              content={twitterTitle}
              key="twitter:title"
            />
          )}
          {twitterImage && (
            <meta
              name="twitter:image"
              content={twitterImage}
              key="twitter:image"
            />
          )}
          {twitterDescription && (
            <meta
              name="twitter:description"
              content={twitterDescription}
              key="twitter:description"
            />
          )}
          <link rel="icon" type="image/png" href="/images/favicon.svg" />
        </Head>
        {children}
      </>
    );
  }
);
export default Meta;
