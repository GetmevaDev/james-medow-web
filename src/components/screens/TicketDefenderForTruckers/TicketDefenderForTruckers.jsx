import { useState } from "react";

import { Layout } from "@/components/layout/layout";
import { Banner, Faq, Form, HomeBanner } from "@/components/ui";
import { Credentials } from "@/components/ui/Credentials/Credentials";
import { LegalIssues } from "@/components/ui/LegalIssues/LegalIssues";
import { MeetJamesMeadows } from "@/components/ui/MeetJamesMeadows/MeetJamesMeadows";
import { Representation } from "@/components/ui/Representation/Representation";

export const TicketDefenderForTruckersScreen = ({
  attributes,
  active,
  meta,
  data,
}) => {
  const [isActive, setIsActive] = useState(active);
  console.log(data, "data");
  return (
    <Layout
      attributes={attributes}
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
        style={{ height: "695px" }}
        image={attributes?.banner?.bg_image?.data?.attributes?.url}
        title={attributes?.banner?.title}
        subTitle="text"
        buttons
        isActive={isActive}
        setIsActive={setIsActive}
        data={data?.attributes?.SignUp}
        dataTickets={data?.attributes?.SignUpMoreThreeTickets}
        button={attributes?.banner?.button}
        buttonLink={attributes?.banner?.button_link}
        callUs={attributes?.banner?.call_us}
      />

      <div className="layout">
        <Form htmlSubCall={attributes?.banner?.call_us} />

        <MeetJamesMeadows
          title={attributes?.MeetJamesMeadows?.title}
          description={attributes?.MeetJamesMeadows?.description}
          image={attributes?.MeetJamesMeadows?.image?.data?.attributes?.url}
        />
      </div>

      <Representation
        items={attributes?.Truckers?.Text}
        title={attributes?.Truckers?.title}
        button={attributes?.Truckers?.button}
        bigPhoto={attributes?.Truckers?.bigImage?.data?.attributes?.url}
        smallPhoto={attributes?.Truckers?.smallImage?.data?.attributes?.url}
      />

      <div className="layout">
        <Credentials
          title={attributes?.Credentials?.title}
          description={attributes?.Credentials?.description}
          leftColumn={attributes?.Credentials?.leftColumn}
          rightColumn={attributes?.Credentials?.rightColumn}
          leftColumnName={attributes?.Credentials?.leftColumnName}
          rightColumnName={attributes?.Credentials?.rightColumnName}
        />
      </div>

      <Representation
        reverse
        items={attributes?.TruckerTickets?.Text}
        title={attributes?.TruckerTickets?.title}
        button={attributes?.TruckerTickets?.button}
        bigPhoto={attributes?.TruckerTickets?.bigImage?.data?.attributes?.url}
        buttonText={attributes?.TruckerTickets?.button}
        subText={attributes?.TruckerTickets?.subText}
      />

      <div className="layout">
        <LegalIssues
          title={attributes?.LegalIssues?.title}
          description={attributes?.LegalIssues?.description}
          items={attributes?.LegalIssues?.ChooseusItem}
        />
      </div>

      <div className="layout">
        <Faq
          title={attributes?.FAQ?.title}
          items={attributes?.FAQ?.FAQItem}
          position="left"
        />

        <div className="description">{attributes?.subText}</div>
      </div>
    </Layout>
  );
};