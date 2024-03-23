import dynamic from "next/dynamic";

import { fetchAPI } from "@/components/utils/fetchApi";

const TicketDefenderForTruckersScreen = dynamic(() =>
  import(
    "../components/screens/TicketDefenderForTruckers/TicketDefenderForTruckers"
  )
);

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
    },
    revalidate: 60,
  };
}
export default function TicketDefenderForTruckers({ attributes, commonData }) {
  return (
    <TicketDefenderForTruckersScreen
      attributes={attributes}
      data={commonData?.layoutData?.data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
