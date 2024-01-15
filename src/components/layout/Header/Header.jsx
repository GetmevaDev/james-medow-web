import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useMediaQuery } from "@/components/hooks";
import { Navigation } from "@/components/ui";
import { NavigationTest } from "@/components/ui/Navigation/NavigationTest";

import styles from "./Header.module.scss";

export const Header = ({ menus }) => {
  const query = useMediaQuery("(max-width: 1000px)");

  console.log(menus, "memnnus");
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
          <div className={styles.wrap}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  width={235}
                  height={190}
                  alt="logo"
                  src="/images/logo.svg"
                />
              </Link>
            </div>

            <NavigationTest menus={menus} />
          </div>
        )}
      </div>
    </div>
  );
};
