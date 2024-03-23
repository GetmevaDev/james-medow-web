import dynamic from "next/dynamic";

import { fetchAPI } from "@/components/utils/fetchApi";

const Reviews = dynamic(() => import("../components/screens/Reviews/Reviews"));

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("reviews-page?populate=deep");

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

export default function ReviewsPage({ attributes, commonData }) {
  return (
    <Reviews
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
