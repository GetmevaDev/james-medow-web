import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Rating, ReviewsCards, Source } from "@/components/ui";

export const Reviews = ({ attributes, data, courts, menus }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    image={attributes?.seo?.image}
    data={data}
    courts={courts}
    menus={menus}
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

    <Source sub="Reviews" />
    <div className="layout">
      <Rating />
      <ReviewsCards
        cards={attributes?.ReviewComment}
        title={attributes?.title}
      />
    </div>
  </Layout>
);
