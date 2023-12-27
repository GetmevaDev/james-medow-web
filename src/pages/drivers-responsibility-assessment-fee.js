import { DriversResponsibility } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("draf?populate=deep");

  const { data } = await fetchAPI("layout?populate=deep");
  const { data: courts } = await fetchAPI("courts-we-covers?populate=deep");

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
    },
    revalidate: 60, // In seconds
  };
}

export default function DriversResponsibilityFee({ attributes, data, courts }) {
  return (
    <DriversResponsibility
      attributes={attributes}
      data={data}
      courts={courts}
    />
  );
}
