import dynamic from "next/dynamic";

const NotFoundPage = dynamic(() =>
  import("@/components/screens/NotFound/NotFound")
);

export default function NotFound({ commonData }) {
  return <NotFoundPage menus={commonData?.menusData?.data} />;
}
