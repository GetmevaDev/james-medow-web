import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Card, CourtCard, Description, Source } from "@/components/ui";

export const CourtsWeCover = ({ attributes }) => (
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

    <Source sub="Courts We Cover" />
    <div className="layout">
      <Description description={attributes?.description} />

      <div className="grid">
        {attributes.ItemCourt?.map((item) => (
          <CourtCard key={item.id} {...item} />
        ))}
      </div>

      <Description description={attributes?.description_bottom} />
    </div>
  </Layout>
);