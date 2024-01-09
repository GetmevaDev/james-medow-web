import { Accessibility } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("accessibility-policy-page?populate=deep");

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
      menus,
      courts,
    },
    revalidate: 60, // In seconds
  };
}

export default function AccessibilityPolicyPage({ attributes, data, courts, menus }) {
  return <Accessibility attributes={attributes} data={data} courts={courts} menus={menus} />;
}
