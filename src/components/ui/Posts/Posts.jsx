import React from "react";

import { Post } from "./Post/Post";

import styles from "./Posts.module.scss";

export const Posts = ({ data }) => (
  <div className={styles.posts}>
    {data?.reverse().map((item) => (
      <Post key={item.id} {...item} />
    ))}
  </div>
);
