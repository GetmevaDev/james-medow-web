import dynamic from "next/dynamic";

import { fetchAPI } from "@/components/utils/fetchApi";

const HomeScreen = dynamic(() => import("../components/screens/Home/Home"), {
  loading: "loading",
});
export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("home-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60,
  };
}

export default function Home({ attributes, commonData }) {
  return (
    <HomeScreen
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
