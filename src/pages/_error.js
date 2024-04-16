import React from "react";

const Error = ({ menus }) => <div>error</div>;

Error.getInitialProps = ({ res }) => {
  const statusCode = res?.statusCode || 500;

  return { statusCode };
};

export default Error;
