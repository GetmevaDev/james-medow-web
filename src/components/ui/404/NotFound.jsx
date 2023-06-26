import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "..";

import styles from "./NotFound.module.scss";

export const NotFoundError = () => (
  <div className={styles.not_found}>
    <Image width={467} height={488} alt="404" src="/images/404.svg" />

    <div className={styles.description}>
      The page you are looking for can not be found
    </div>

    <Link href="/">
      <Button variant="secondary">Go home</Button>
    </Link>
  </div>
);
