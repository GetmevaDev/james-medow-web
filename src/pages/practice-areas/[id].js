import { PracticeAreaId } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(
    `practicesses/find-by-slug/${params.id}?populate=deep`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,

    },
    revalidate: 60, // In seconds
  };
}
export async function getStaticPaths() {
  const { data } = await fetchAPI("practicesses?populate=deep");

  const paths = data?.map((post) => ({
    params: { id: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function PracticeAreaIdPage({ data, commonData }) {
  return (
    <PracticeAreaId
      attributes={data?.attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
