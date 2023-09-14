import React, { useEffect, useState } from "react";

import { Post } from "./Post/Post";

import styles from "./Posts.module.scss";

export const Posts = ({ data }) => {
  const dataReversed = [...data].reverse();

  return (
    <div className={styles.posts}>
      {dataReversed?.map((item) => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  );
};
