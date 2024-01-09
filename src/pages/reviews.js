import { Reviews } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("reviews-page?populate=deep");

  const { data } = await fetchAPI("layout?populate=deep");
  const { data: courts } = await fetchAPI("courts-we-covers?populate=deep");
  const { data: menus } = await fetchAPI("navs?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
      data,
      courts,
      menus
    },
    revalidate: 60, // In seconds
  };
}

export default function ReviewsPage({ attributes, data, courts, menus }) {
  return <Reviews attributes={attributes} data={data} courts={courts} menus={menus} />;
}
