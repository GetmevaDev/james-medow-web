import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, ImageBanner, Source, Text, TextImage } from "@/components/ui";

export const PracticeAreaId = ({ attributes }) => (
  <Layout
    title={attributes?.seo?.title}
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
      image={attributes?.banner?.bg_image?.data?.attributes?.url}
      title={attributes?.banner?.title}
    />

    <Source sub={attributes?.banner?.title} />
    <ImageBanner
      description={attributes?.ImageBanner?.description}
      image={attributes?.ImageBanner?.image?.data?.attributes?.url}
    />

    {attributes?.BlockGray !== null && (
      <Text
        title={attributes?.BlockGray?.title}
        description={attributes?.BlockGray?.description}
      />
    )}

    <TextImage
      image={attributes?.BlockWhite?.image?.data?.attributes?.url}
      alt={attributes?.BlockWhite?.image?.data?.attributes?.name}
      title={attributes?.BlockWhite?.title}
      description={attributes?.BlockWhite?.description}
    />
  </Layout>
);
