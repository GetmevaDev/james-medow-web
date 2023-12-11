import { MeetJamesMedowsScreen } from "@/components/screens/MeetJamesMedows/MeetJamesMedows";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("meet-james-medow?populate=deep");

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

export default function MeetJamesMedows({ attributes }) {
  console.log(attributes, "attr");
  return <MeetJamesMedowsScreen attributes={attributes} />;
}
