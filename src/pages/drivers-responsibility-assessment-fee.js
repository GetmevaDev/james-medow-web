import { DriversResponsibility } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("draf?populate=deep");

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

export default function DriversResponsibilityFee({ attributes }) {
  console.log(attributes, "attr");
  return <DriversResponsibility attributes={attributes} />;
}
