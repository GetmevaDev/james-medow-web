import { PostScreen } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(
    `blog-posts-pages/find-by-slug/${params.id}?populate=deep`
  );

  const { data: layout } = await fetchAPI("layout?populate=deep");
  const { data: courts } = await fetchAPI("courts-we-covers?populate=deep");
  const { data: menus } = await fetchAPI("navs?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      layout,
      menus,
      courts,
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const { data } = await fetchAPI("blog-posts-pages?populate=deep");

  const paths = data?.map((post) => ({
    params: { id: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function BlogsPage({ data, layout, courts, menus }) {
  return <PostScreen data={data} layout={layout} courts={courts} menus={menus} />;
}
