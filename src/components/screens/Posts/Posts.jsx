import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Posts } from "@/components/ui";

export const PostsScreen = ({ attributes, data }) => (
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
      style={{ height: "650px" }}
      image={attributes?.banner?.bg_image?.data?.attributes?.url}
      title={attributes?.banner?.title}
      description={attributes?.banner?.sub_title}
      button={attributes?.banner?.button}
      buttonLink={attributes?.banner?.button_link}
    />

    <div className="layout">
      <Posts data={data} />
    </div>
  </Layout>
);
