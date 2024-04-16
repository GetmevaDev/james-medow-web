import dynamic from "next/dynamic";

import DriversResponsibility from "@/components/screens/DriversResponsibility/DriversResponsibility";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("draf?populate=deep");

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

export default function DriversResponsibilityFee({ attributes, commonData }) {
  return (
    <DriversResponsibility
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
