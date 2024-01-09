import { SignUpScreen } from "@/components/screens/SignUp/SignUpScreen";
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
  const { data: menus } = await fetchAPI("navs?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
      data,
      menus
    },
    revalidate: 60,
  };
}

export default function SignUp({ attributes, data, menus }) {
return <SignUpScreen attributes={attributes} active meta={data} menus={menus} />;
}
