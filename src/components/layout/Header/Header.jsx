import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useMediaQuery } from "@/components/hooks";
import { Navigation } from "@/components/ui";
import { NavigationTest } from "@/components/ui/Navigation/NavigationTest";

import styles from "./Header.module.scss";

export const Header = ({ menus }) => {
  const query = useMediaQuery("(max-width: 800px)");
  return (
    <div className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Link href="/">
              <Image width={235} height={190} alt="logo" src="/images/logo.svg" />
            </Link>
          </div>
          {query ? <Navigation /> : <NavigationTest menus={menus} />}

        </div>
      </div>
    </div>
  );
};
