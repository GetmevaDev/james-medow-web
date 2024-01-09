import { PracticeAreaId } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(
    `practicesses/find-by-slug/${params.id}?populate=deep`
  );
  const { data: layout } = await fetchAPI("layout?populate=deep");
  const { data: menus } = await fetchAPI("navs?populate=deep");

  const { data: courts } = await fetchAPI("courts-we-covers?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      layout,
      courts,
      menus,
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

export default function PracticeAreaIdPage({ data, layout, courts, menus }) {
  return (
    <PracticeAreaId
      attributes={data?.attributes}
      data={layout}
      courts={courts}
      menus={menus}
    />
  );
}
