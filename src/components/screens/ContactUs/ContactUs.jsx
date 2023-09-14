import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Contact, Source } from "@/components/ui";

export const ContactUs = ({ attributes }) => (
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

    <Source sub="Contact Us" />

    <div className="layout">
      <Contact
        address={attributes?.ContactUs?.address}
        map={attributes?.ContactUs?.map}
        email={attributes?.ContactUs?.email}
        phone={attributes?.ContactUs?.phone}
        title={attributes?.ContactUs?.title}
      />
    </div>
  </Layout>
);
