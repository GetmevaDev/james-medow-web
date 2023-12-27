import { CourtsWeCoverId } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(
    `courts-we-cover/find-by-slug/${params.id}?populate=deep`
  );

  const { data: layout } = await fetchAPI("layout?populate=deep");
  const { data: courts } = await fetchAPI("courts-we-covers?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data || null,
      courts,
      layout,
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

export default function CourtsWeCoverIdPage({ data, courts, layout }) {
  return (
    <CourtsWeCoverId
      attributes={data?.attributes}
      courts={courts}
      data={layout}
    />
  );
}
