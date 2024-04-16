import dynamic from "next/dynamic";

import CourtsWeCover from "@/components/screens/CourtsWeCover/CourtsWeCover";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("courts-we-cover-page?populate=deep");

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

export default function CourtsWeCoverPage({ attributes, commonData }) {
  return (
    <CourtsWeCover
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
