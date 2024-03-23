import dynamic from "next/dynamic";

import { fetchAPI } from "@/components/utils/fetchApi";

const Accessibility = dynamic(() =>
  import("../components/screens/AccessibilityPolicy/AccessibilityPolicy")
);

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("accessibility-policy-page?populate=deep");

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

export default function AccessibilityPolicyPage({ attributes, commonData }) {
  return (
    <Accessibility
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
