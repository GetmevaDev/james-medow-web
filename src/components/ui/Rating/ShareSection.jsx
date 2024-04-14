import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { Button } from "..";

import styles from "./Rating.module.scss";

export const ShareSection = () => (
  <div className={styles.share}>
    <p className={styles.description}>
      Share This Story, Choose Your Platform!
    </p>
    <div className={styles.google_inner}>
      <Link
        href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x89c25a4c1d685b47:0xeeac31361034579b!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
        target="_blank"
      >
        <Button variant="secondary" className={styles.button_share}>
          <div className={styles.button_google}>
            Share <FcGoogle size={20} />
          </div>
        </Button>
      </Link>
    </div>
  </div>
);
