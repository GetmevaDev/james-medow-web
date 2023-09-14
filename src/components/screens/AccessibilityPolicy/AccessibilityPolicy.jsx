import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Description, Source } from "@/components/ui";

export const Accessibility = ({ attributes }) => (
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
    <Source
      sub="Accessibility Policyand Commitment Statement"
      style={{ marginTop: "50px" }}
    />
    <Description description={attributes?.description} />
  </Layout>
);
