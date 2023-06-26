import Image from "next/image";
import React from "react";

import { Layout } from "@/components/layout/layout";
import { NotFoundError } from "@/components/ui/404/NotFound";

export const NotFoundPage = () => (
  <Layout>
    <div className="layout">
      <NotFoundError />
    </div>
  </Layout>
);
