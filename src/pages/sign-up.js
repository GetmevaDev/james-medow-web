import dynamic from "next/dynamic";

import SignUpScreen from "@/components/screens/SignUp/SignUpScreen";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("home-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  const { data } = await fetchAPI("sign-up-page?populate=deep");

  if (!data) {
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

export default function SignUp({ attributes, data, commonData }) {
  return (
    <SignUpScreen
      attributes={attributes}
      active
      layout={commonData?.layoutData?.data}
      meta={data}
      courts={commonData?.courtsData?.data}
      menus={commonData?.menusData?.data}
    />
  );
}
