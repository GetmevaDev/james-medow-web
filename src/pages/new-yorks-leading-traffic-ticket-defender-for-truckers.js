import { TicketDefenderForTruckersScreen } from "@/components/screens/TicketDefenderForTruckers/TicketDefenderForTruckers";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const { data } = await fetchAPI("home-page?populate=deep");

  const { data: layout } = await fetchAPI("layout?populate=deep");
  const { data: courts } = await fetchAPI("courts-we-covers?populate=deep");

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
      layout,
      courts,
    },
    revalidate: 60,
  };
}
export default function TicketDefenderForTruckers({
  attributes,
  data,
  layout,
  courts,
}) {
  return (
    <TicketDefenderForTruckersScreen
      attributes={attributes}
      data={data}
      layout={layout}
      courts={courts}
    />
  );
}
