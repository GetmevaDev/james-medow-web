import dynamic from "next/dynamic";

import { fetchAPI } from "@/components/utils/fetchApi";

const Privacy = dynamic(() =>
  import("../components/screens/PrivacyPolicy/PrivacyPolicy")
);

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("privacy-policy-page?populate=deep");

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

export default function PrivacyPolicyPage({ attributes, commonData }) {
  return (
    <Privacy
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
