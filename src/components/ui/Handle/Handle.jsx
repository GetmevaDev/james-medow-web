import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Button, Typography } from "..";

import styles from "./Handle.module.scss";

export const Handle = ({ attributes }) => {
  const [showMore, setShowMore] = useState(false);
  const totalItems = attributes?.WeHandle?.WeHandleItem.length;

  useEffect(() => {
    const handleResize = () => {
      setShowMore(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const itemsToShowInitially = 10;

  return (
    <div className={styles.handle_inner}>
      <Typography tag="h1">{attributes?.WeHandle?.title}</Typography>

      <div className={styles.items}>
        {attributes?.WeHandle?.WeHandleItem.slice(
          0,
          showMore ? totalItems : itemsToShowInitially
        ).map((item) => (
          <div className={styles.item}>
            {item?.title ? (
              <div className={styles.item_name}>
                <div className={styles.title}>{item?.title}</div>
                <div className={styles.description}>{item?.description}</div>
              </div>
            ) : (
              <div className={styles.item_name}>
                <div className={styles.name}>{item?.service_name}</div>
                {item?.service ? (
                  <Image
                    width={38}
                    height={38}
                    alt="checkmark"
                    src="/images/true.svg"
                  />
                ) : (
                  <Image
                    width={38}
                    height={38}
                    alt="checkmark"
                    src="/images/false.svg"
                  />
                )}
              </div>
            )}
          </div>
        ))}

        {!showMore && totalItems > itemsToShowInitially && (
          <Button
            onClick={handleShowMore}
            variant="secondary"
            className={styles.show_more}
          >
            Show More
          </Button>
        )}
      </div>
    </div>
  );
};
