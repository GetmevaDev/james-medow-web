import { TicketDefenderForTruckersScreen } from "@/components/screens/TicketDefenderForTruckers/TicketDefenderForTruckers";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("ticket-defender-for-truckers-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60,
  };
}
export default function TicketDefenderForTruckers({ attributes }) {
  console.log(attributes, "attr");
  return <TicketDefenderForTruckersScreen attributes={attributes} />;
}
