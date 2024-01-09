import { NotFoundPage } from "@/components/screens";

export default function NotFound({ commonData }) {
  return <NotFoundPage menus={commonData?.menusData?.data} />;
}
