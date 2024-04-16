/* eslint-disable function-paren-newline */
import dynamic from "next/dynamic";

import ContactUs from "@/components/screens/ContactUs/ContactUs";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("contact-us-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}

export default function ContactUsPage({ attributes, commonData }) {
  return (
    <ContactUs
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
