import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

import { useMediaQuery } from "@/components/hooks";
import { Navigation } from "@/components/ui";
import { NavigationTest } from "@/components/ui/Navigation/NavigationTest";

import { HeaderTest } from "../HeaderTest/HeaderTest";

import styles from "./Header.module.scss";

export const Header = memo(({ menus }) => {
  const query = useMediaQuery("(max-width: 1000px)");

  return (
    <div className={styles.header}>
      <div className={styles.header_inner}>
        {query ? (
          <div className={styles.wrap}>
            <div className={styles.logo_mobile}>
              <Link href="/">
                <Image
                  width={100}
                  height={100}
                  alt="logo"
                  src="/images/logo-mobile.svg"
                />
              </Link>
            </div>
            <Navigation menus={menus} />
          </div>
        ) : (
          <HeaderTest menus={menus} />
        )}
      </div>
    </div>
  );
});
