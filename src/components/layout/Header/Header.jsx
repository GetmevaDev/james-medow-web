import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Navigation } from "@/components/ui";

import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link href="/">
        <Image width={225} height={40} alt="logo" src="/images/logo.svg" />
      </Link>
    </div>

    <Navigation />
  </header>
);
