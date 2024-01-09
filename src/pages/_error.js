import React from "react";

import { NotFoundPage } from "@/components/screens";

const Error = ({ statusCode }) => (
  <div>
    <NotFoundPage />
  </div>
  );

Error.getInitialProps = ({ res }) => {
  const statusCode = res?.statusCode || 500;

  return { statusCode };
};

export default Error;
