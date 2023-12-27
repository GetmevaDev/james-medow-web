import { TicketDefenderForTruckersScreen } from "@/components/screens/TicketDefenderForTruckers/TicketDefenderForTruckers";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const { data } = await fetchAPI("home-page?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

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
      data,
    },
    revalidate: 60,
  };
}
export default function TicketDefenderForTruckers({ attributes, data }) {
  return (
    <TicketDefenderForTruckersScreen attributes={attributes} data={data} />
  );
}
