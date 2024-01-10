import { PracticeAreas } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("practice-areas-page?populate=deep");

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

export default function Blog({ attributes, commonData }) {
  return <PracticeAreas attributes={attributes} data={commonData?.layoutData?.data} courts={commonData?.courtsData?.data} menus={commonData?.menusData?.data} />;
}
