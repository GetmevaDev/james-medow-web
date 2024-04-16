import dynamic from "next/dynamic";

import NotFoundPage from "@/components/screens/NotFound/NotFound";

export default function NotFound({ commonData }) {
  return <NotFoundPage menus={commonData?.menusData?.data} />;
}
