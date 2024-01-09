import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Navigation } from "@/components/ui";
import { NavigationTest } from "@/components/ui/Navigation/NavigationTest";

import styles from "./Header.module.scss";

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.header_inner}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <Link href="/">
            <Image width={235} height={190} alt="logo" src="/images/logo.svg" />
          </Link>
        </div>

        <Navigation />

        {/* <NavigationTest /> */}
      </div>
    </div>
  </div>
);
