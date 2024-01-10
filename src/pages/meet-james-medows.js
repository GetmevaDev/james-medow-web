import { MeetJamesMedowsScreen } from "@/components/screens/MeetJamesMedows/MeetJamesMedows";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("meet-james-medow?populate=deep");

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
      menus,
      data,
      courts,
    },
    revalidate: 60,
  };
}

export default function MeetJamesMedows({ attributes, data, courts, menus }) {
  return (
    <MeetJamesMedowsScreen
      attributes={attributes}
      menus={menus}
      data={data}
      courts={courts}
    />
  );
}
