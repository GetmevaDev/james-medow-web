import dynamic from "next/dynamic";

import { fetchAPI } from "@/components/utils/fetchApi";

const PostsScreen = dynamic(() => import("@/components/screens/Posts/Posts"));

export async function getStaticProps() {
  const { data } = await fetchAPI("blog-posts-pages?populate=deep");
  const {
    data: { attributes },
  } = await fetchAPI("blog-page?populate=deep");

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
    },
    revalidate: 60, // In seconds
  };
}

export default function Blog({ data, attributes, commonData }) {
  return (
    <PostsScreen
      data={data}
      layout={commonData?.layoutData?.data}
      attributes={attributes}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
