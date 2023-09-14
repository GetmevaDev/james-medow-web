import Link from "next/link";

import styles from "./Source.module.scss";

export const Source = ({ sub, blog, style, path }) => (
  <div className={styles.source_inner} style={style}>
    <div className={styles.source}>
      <Link className={styles.title} href="/">
        Home
      </Link>
      <div className={styles.path}>
        <div>»</div>
        {blog && (
          <Link className={styles.blog_inner} href={path}>
            <div className={styles.blog}>{blog}</div>
            <span>»</span>
          </Link>
        )}
        <div>{sub}</div>
      </div>
    </div>
  </div>
);
