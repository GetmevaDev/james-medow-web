import Link from "next/link";

import styles from "./Source.module.scss";

export const Source = ({ sub, blog }) => (
  <div className={styles.source_inner}>
    <div className={styles.source}>
      <Link className={styles.title} href="/">
        Home
      </Link>
      <div className={styles.path}>
        <div>»</div>
        {blog && (
          <Link className={styles.blog_inner} href="/blog">
            <div className={styles.blog}>{blog}</div>
            <span>»</span>
          </Link>
        )}
        <div>{sub}</div>
      </div>
    </div>
  </div>
);
