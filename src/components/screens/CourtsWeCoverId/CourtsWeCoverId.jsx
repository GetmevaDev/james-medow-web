import React from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Description, Source, Text } from "@/components/ui";
import ImageBannerText from "@/components/ui/ImageBannerText/ImageBannerText";

const CourtsWeCoverId = ({ attributes, courts, data, menus, dataBottom }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    data={data}
    menus={menus}
    courts={courts}
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
      sub={attributes?.banner?.title}
      blog="Courts we cover"
      path="/courts-we-cover"
    />

    <Description description={attributes?.description} />

    <Text
      title={attributes?.BlockGray?.title}
      description={attributes?.BlockGray?.description}
    />

    {attributes?.BlockWhite?.map((item) => (
      <Text
        key={item.id}
        color="white"
        title={item?.title}
        description={item?.description}
      />
    ))}

    <ImageBannerText
      width={500}
      height={932}
      title={dataBottom?.title}
      description={dataBottom?.description}
      image={dataBottom?.image?.data?.attributes?.url}
    />
  </Layout>
);

export default CourtsWeCoverId;
