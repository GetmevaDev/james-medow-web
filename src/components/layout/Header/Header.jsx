import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

import { Button, Navigation } from "@/components/ui";

import { fetcher } from "../Footer/Footer";

import styles from "./Header.module.scss";

export const Header = () => {
  const {
    data: header,
    isError,
    isLoading,
  } = useSWR(
    "https://cms-james-medows.herokuapp.com/api/layout?populate=deep",
    // "http://localhost:1337/api/layout?populate=deep",
    fetcher
  );

  if (isLoading) {
    return null;
  }

  if (isError) return <div>Error...</div>;

  return (
    <div className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                width={225}
                height={40}
                alt="logo"
                src={
                  header?.data?.attributes?.Footer?.Logo?.data?.attributes?.url
                }
              />
            </Link>
          </div>

          <Navigation
            data={header?.data?.attributes?.Header?.HeaderItem}
            button={header?.data?.attributes?.Header?.button}
            tel={header?.data?.attributes?.Header?.button_link}
          />
        </div>
      </div>
    </div>
  );
};
