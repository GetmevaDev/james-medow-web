import React from "react";

import { Layout } from "@/components/layout/layout";
import { NotFoundError } from "@/components/ui/404/NotFound";

const NotFoundPage = ({ menus }) => (
  <Layout menus={menus}>
    <div className="layout">
      <NotFoundError />
    </div>
  </Layout>
);

export default NotFoundPage;
