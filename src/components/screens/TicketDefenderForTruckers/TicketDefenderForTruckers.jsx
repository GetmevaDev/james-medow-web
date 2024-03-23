import dynamic from "next/dynamic";
import { useState } from "react";

import { Layout } from "@/components/layout/layout";
import { Credentials } from "@/components/ui/Credentials/Credentials";
import { LegalIssues } from "@/components/ui/LegalIssues/LegalIssues";
import { MeetJamesMeadows } from "@/components/ui/MeetJamesMeadows/MeetJamesMeadows";
import { Representation } from "@/components/ui/Representation/Representation";

const HomeBanner = dynamic(() =>
  import("@/components/ui/HomeBanner/HomeBanner")
);
const Form = dynamic(() => import("@/components/ui/Form/Form"));

const Faq = dynamic(() => import("@/components/ui/Faq/Faq"));

const TicketDefenderForTruckersScreen = ({
  attributes,
  active,
  data,
  menus,
  courts,
  layout,
}) => {
  const [isActive, setIsActive] = useState(active);

  return (
    <Layout
      attributes={attributes}
      title={attributes.seo?.title}
      description={attributes.seo?.description}
      image={attributes.seo?.image}
      isActive={isActive}
      menus={menus}
      data={layout}
      courts={courts}
      setIsActive={setIsActive}
      twitterCard={attributes.seo?.twitter_card}
      twitterDescription={attributes.seo?.twitter_description}
      twitterDomain={attributes.seo?.twitter_domain}
      twitterImage={attributes.seo?.twitter_image}
      twitterTitle={attributes.seo?.twitter_title}
      twitterUrl={attributes.seo?.twitter_url}
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
        subText={attributes?.Truckers?.subText}
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

export default TicketDefenderForTruckersScreen;
