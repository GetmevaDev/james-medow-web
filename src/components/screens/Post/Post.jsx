import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, ImageBanner, Source, Text, TextImage } from "@/components/ui";

export const PostScreen = ({ data }) => (
  <Layout
    title={data?.attributes?.seo?.title}
    description={data?.attributes?.seo?.description}
    image={data?.attributes?.seo?.image}
    twitterCard={data?.attributes?.seo?.twitter_card}
    twitterDescription={data?.attributes?.seo?.twitter_description}
    twitterDomain={data?.attributes?.seo?.twitter_domain}
    twitterImage={data?.attributes?.seo?.twitter_image}
    twitterTitle={data?.attributes?.seo?.twitter_title}
    twitterUrl={data?.attributes?.seo?.twitter_url}
  >
    <Banner
      title={data?.attributes?.banner?.title}
      style={{ height: "450px", top: "50px" }}
      top="big"
      image={data?.attributes?.banner?.bg_image?.data?.attributes?.url}
    />
    <Source
      sub={data?.attributes?.banner?.title}
      blog="Blog"
      path="/blog"
      style={{ marginTop: "50px" }}
    />

    <ImageBanner
      alt={data?.attributes?.ImageBanner?.image?.data?.attributes?.name}
      description={data?.attributes?.ImageBanner?.description}
      title=""
      reverse
      image={data?.attributes?.ImageBanner?.image?.data?.attributes?.url}
    />

    <Text
      title={data?.attributes?.BlockGray?.title}
      description={data?.attributes?.BlockGray?.description}
    />

    <TextImage
      image={data?.attributes?.BlockWhite?.image?.data?.attributes?.url}
      alt={data?.attributes?.BlockWhite?.image?.data?.attributes?.name}
      height="480"
      title={data?.attributes?.BlockWhite?.title}
      description={data?.attributes?.BlockWhite?.description}
    />
  </Layout>
);
