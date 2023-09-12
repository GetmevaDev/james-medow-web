import Image from "next/image";
import Link from "next/link";
import React from "react";

import { truncateText } from "@/components/utils/truncateText";

import styles from "./Post.module.scss";

export const Post = ({ attributes }) => {
  const description = truncateText(attributes?.ImageBanner?.title, 100);
  return (
    <div>
      <div className={styles.image}>
        <Image
          width={375}
          height={375}
          className={styles.img}
          alt={attributes?.ImageBanner?.image?.data?.attributes?.name}
          src={attributes?.ImageBanner?.image?.data?.attributes?.url}
        />
      </div>
      <div className={styles.title}>{attributes?.banner?.title}</div>
      <div className={styles.description}>{description}</div>
      <Link href={`blog/${attributes?.slug}`} className={styles.read}>
        Read more...
      </Link>
    </div>
  );
};
