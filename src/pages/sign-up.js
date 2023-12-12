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

export default function SignUp({ attributes, data }) {
  console.log(data, "data");
  return <SignUpScreen attributes={attributes} active meta={data} />;
}
