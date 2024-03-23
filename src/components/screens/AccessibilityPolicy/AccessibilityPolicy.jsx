import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Description, Source } from "@/components/ui";

const Accessibility = ({ attributes, data, courts, menus }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    menus={menus}
    image={attributes?.seo?.image}
    data={data}
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
    <Source sub="Accessibility Policyand Commitment Statement" />
    <Description description={attributes?.description} />
  </Layout>
);

export default Accessibility;
