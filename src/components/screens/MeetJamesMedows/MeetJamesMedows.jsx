import React from "react";

import { Layout } from "@/components/layout/layout";
import {
  Banner,
  ImageBanner,
  Source,
  Text,
  TextImage,
} from "@/components/ui";

export const MeetJamesMedowsScreen = ({ attributes, data, courts, menus }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    image={attributes?.seo?.image}
    data={data}
    menus={menus}
    courts={courts}
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

    <Source sub="Meet James Medows" />

    <ImageBanner
      alt={attributes?.ImageBanner?.image?.data?.attributes?.name}
      description={attributes?.ImageBanner?.title}
      descriptionTitleBold={attributes?.ImageBanner?.description}
      subText={attributes?.ImageBanner?.description2}
      className="bold"
      reverse
      image={attributes?.ImageBanner?.image?.data?.attributes?.url}
    />

    <Text
      title={attributes?.BlockGray?.title}
      description={attributes?.BlockGray?.description}
    />

    <TextImage
      image={attributes?.BlockWhite?.image?.data?.attributes?.url}
      alt={attributes?.BlockWhite?.image?.data?.attributes?.name}
      height="480"
      title={attributes?.BlockWhite?.title}
      description={attributes?.BlockWhite?.description}
    />

    <ImageBanner
      alt={attributes?.BlockWhite2?.image?.data?.attributes?.name}
      description={attributes?.BlockWhite2?.description}
      height={356}
      className="padding"
      titleBlack={attributes?.BlockWhite2?.title}
      reverse
      image={attributes?.BlockWhite2?.image?.data?.attributes?.url}
    />
  </Layout>
);
