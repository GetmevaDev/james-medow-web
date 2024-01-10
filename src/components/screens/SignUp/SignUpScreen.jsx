import { useState } from "react";

import { Layout } from "@/components/layout/layout";
import {
  ChooseUs,
  Contact,
  Faq,
  Form,
  Handle,
  HomeBanner,
  ImageBannerText,
  OurProfiles,
  OurProfilesCards,
  SatisfiedClient,
} from "@/components/ui";

export const SignUpScreen = ({ attributes, active, meta, menus, courts, layout }) => {
  const [isActive, setIsActive] = useState(active);

  return (
    <Layout
      attributes={attributes}
      menus={menus}
      data={layout}
      courts={courts}
      title={meta?.attributes.seo?.title}
      description={meta?.attributes.seo?.description}
      image={meta?.attributes.seo?.image}
      isActive={isActive}
      setIsActive={setIsActive}
      twitterCard={meta?.attributes.seo?.twitter_card}
      twitterDescription={meta?.attributes.seo?.twitter_description}
      twitterDomain={meta?.attributes.seo?.twitter_domain}
      twitterImage={meta?.attributes.seo?.twitter_image}
      twitterTitle={meta?.attributes.seo?.twitter_title}
      twitterUrl={meta?.attributes.seo?.twitter_url}
    >
      <HomeBanner
        image={attributes?.Banner?.bg_image?.data?.attributes?.url}
        title={attributes?.Banner?.title}
        subTitle={attributes?.Banner?.sub_title}
        button={attributes?.Banner?.button}
        buttonLink={attributes?.Banner?.button_link}
        callUs={attributes?.Banner?.call_us}
        data={attributes?.SignUp}
        dataTickets={attributes?.SignUpMoreThreeTickets}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <div className="layout">
        <Form htmlSubCall={attributes?.Banner?.call_us} />

        <Handle attributes={attributes} />

        <ChooseUs
          title={attributes?.Chooseus?.title}
          description={attributes?.Chooseus?.description}
          items={attributes?.Chooseus?.ChooseusItem}
        />
      </div>

      <OurProfiles
        image={attributes?.OutProfiles?.bg_image?.data?.attributes?.url}
        title={attributes?.OutProfiles?.title}
        items={attributes?.OutProfiles?.OutProfileItem}
      />

      <div className="layout">
        <OurProfilesCards
          description={attributes?.OutProfiles?.description}
          items={attributes?.OutProfiles?.Items}
        />
      </div>

      <SatisfiedClient
        image={attributes?.Slider?.bg_image?.data?.attributes?.url}
        title={attributes?.Slider?.title}
        items={attributes?.Slider?.SlideItem}
      />

      <div className="layout">
        <Faq title={attributes?.FAQ?.title} items={attributes?.FAQ?.FAQItem} />
      </div>

      <ImageBannerText
        width={500}
        height={932}
        title={attributes?.ImageBannerText?.title}
        description={attributes?.ImageBannerText?.description}
        image={attributes?.ImageBannerText?.image?.data?.attributes?.url}
        alt={
          attributes?.ImageBannerText?.image?.data?.attributes?.alternativeText
        }
      />

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
};
