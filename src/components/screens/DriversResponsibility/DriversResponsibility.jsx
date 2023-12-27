import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, ColorDraf, Source, TextDraf } from "@/components/ui";

export const DriversResponsibility = ({ attributes, data, courts }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
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

    <Source sub={attributes?.seo?.title} />

    <div className="layout">
      <TextDraf description={attributes?.text} />
    </div>
    <ColorDraf description={attributes?.textGray} />
    <div className="layout">
      <TextDraf description={attributes?.textWhite} />
    </div>
  </Layout>
);
