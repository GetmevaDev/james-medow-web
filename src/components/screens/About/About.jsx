import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, ImageBanner, ImageBannerText, Source } from "@/components/ui";

const AboutSreen = ({ attributes, data, courts, menus }) => (
  <Layout
    title={attributes?.seo?.title}
    data={data}
    menus={menus}
    courts={courts}
    description={attributes?.seo?.description}
    image={attributes?.seo?.image}
    twitterCard={attributes?.seo?.twitter_card}
    twitterDescription={attributes?.seo?.twitter_description}
    twitterDomain={attributes?.seo?.twitter_domain}
    twitterImage={attributes?.seo?.twitter_image}
    twitterTitle={attributes?.seo?.twitter_title}
    twitterUrl={attributes?.seo?.twitter_url}
  >
    <Banner
      image={attributes?.Banner?.bg_image?.data?.attributes?.url}
      title={attributes?.Banner?.title}
    />

    <Source sub="About Us" />

    <ImageBanner
      title={attributes?.ImageBanner?.title}
      description={attributes?.ImageBanner?.description}
      image={attributes?.ImageBanner?.image?.data?.attributes?.url}
      alt={attributes?.ImageBanner?.image?.data?.attributes?.alternativeText}
    />

    <ImageBannerText
      width={500}
      height={849}
      size="reverse"
      title={attributes?.BlockGray?.title}
      description={attributes?.BlockGray?.description}
      image={attributes?.BlockGray?.image?.data?.attributes?.url}
      alt={attributes?.BlockGray?.image?.data?.attributes?.alternativeText}
    />

    <ImageBannerText
      width={500}
      height={844}
      title={attributes?.BlockWhite?.title}
      color="white"
      description={attributes?.BlockWhite?.description}
      image={attributes?.BlockWhite?.image?.data?.attributes?.url}
      alt={attributes?.BlockWhite?.image?.data?.attributes?.alternativeText}
    />
  </Layout>
);

export default AboutSreen;
