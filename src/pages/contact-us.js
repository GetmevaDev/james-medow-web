import { ContactUs } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("contact-us-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}

export default function ContactUsPage({ attributes }) {
  return <ContactUs attributes={attributes} />;
}
