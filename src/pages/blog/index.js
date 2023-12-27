import { PostsScreen } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const { data } = await fetchAPI("blog-posts-pages?populate=deep");
  const {
    data: { attributes },
  } = await fetchAPI("blog-page?populate=deep");

  const { data: layout } = await fetchAPI("layout?populate=deep");
  const { data: courts } = await fetchAPI("courts-we-covers?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      attributes,
      layout,
      courts,
    },
    revalidate: 60, // In seconds
  };
}

export default function Blog({ data, attributes, layout, courts }) {
  return (
    <PostsScreen
      data={data}
      attributes={attributes}
      layout={layout}
      courts={courts}
    />
  );
}
