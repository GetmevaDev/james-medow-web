import React, { useEffect, useState } from "react";

import { Layout } from "@/components/layout/layout";
import { NotFoundError } from "@/components/ui/404/NotFound";
import { fetchAPI } from "@/components/utils/fetchApi";

export const NotFoundPage = ({ menus }) =>
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchAPI("navs?populate=deep");
  //       setData(response);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

   (
     <Layout menus={menus}>
       <div className="layout">
         <NotFoundError />
       </div>
     </Layout>
  );
