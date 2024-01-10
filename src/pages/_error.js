import React from "react";

import { NotFoundPage } from "@/components/screens";
import { fetchAPI } from "@/components/utils/fetchApi";

const Error = ({ menus }) => (
  <div>
    error
  </div>
  );

Error.getInitialProps = ({ res }) => {
  const statusCode = res?.statusCode || 500;

  return { statusCode };
};

export default Error;
