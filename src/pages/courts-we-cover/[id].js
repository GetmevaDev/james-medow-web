import dynamic from "next/dynamic";

import CourtsWeCoverId from "@/components/screens/CourtsWeCoverId/CourtsWeCoverId";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(
    `courts-we-cover/find-by-slug/${params.id}?populate=deep`
  );

  const {
    data: { attributes },
  } = await fetchAPI("court-we-cover-bottom?populate=deep");

  if (!data && !attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data || null,
      dataBottom: attributes || null,
    },
    revalidate: 60, // In seconds
  };
}
export async function getStaticPaths() {
  const { data } = await fetchAPI("courts-we-covers?populate=deep");

  const paths = data?.map((post) => ({
    params: { id: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function CourtsWeCoverIdPage({ data, commonData, dataBottom }) {
  return (
    <CourtsWeCoverId
      dataBottom={dataBottom}
      attributes={data?.attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
