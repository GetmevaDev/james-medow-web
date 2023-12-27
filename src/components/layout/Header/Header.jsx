import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

import { Navigation } from "@/components/ui";

import { fetcher } from "../Footer/Footer";

import styles from "./Header.module.scss";

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.header_inner}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <Link href="/">
            <Image width={225} height={40} alt="logo" src="/images/logo.svg" />
          </Link>
        </div>

        <Navigation />
      </div>
    </div>
  </div>
);
