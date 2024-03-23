import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useMediaQuery } from "@/components/hooks";

import { Button, Typography } from "..";

import styles from "./Handle.module.scss";

const Handle = ({ attributes }) => {
  const isMobile = useMediaQuery("(max-width: 480px)");

  const [showMore, setShowMore] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  return (
    <div className={styles.handle_inner}>
      <Typography tag="h2">{attributes?.WeHandle?.title}</Typography>

      <p className={styles.description_text}>
        At the Law Office of James Medows, your case will be handled by a
        skilled New York traffic ticket lawyer. Whether its a speeding ticket or
        another violation, we are committed to fight traffic tickets vigorously
        to ensure your rights are protected. Our goal is straightforward:
        tickets dismissed, keeping your record clean and preventing costly
        consequences. Rely on our expertise to navigate the complexities of
        traffic law and secure the best possible outcome for you.
      </p>
      <div className={styles.items}>
        <div>
          {attributes?.WeHandle?.WeHandleItemLeft?.map((item, index) => (
            <div className={styles.item} key={index}>
              {item?.title ? (
                <div className={styles.item_name}>
                  <div className={styles.title}>{item?.title}</div>
                  <div className={styles.description}>{item?.description}</div>
                </div>
              ) : (
                <div className={styles.item_name}>
                  {item?.practicess?.data?.attributes?.slug ? (
                    <Link
                      className={styles.name}
                      href={`practice-areas/${item?.practicess?.data?.attributes?.slug}`}
                    >
                      {item?.service_name}
                    </Link>
                  ) : (
                    <div className={styles.name}>{item?.service_name}</div>
                  )}

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
        </div>

        <div>
          {!isMobile &&
            attributes?.WeHandle?.WeHandleItemRight?.map((item, index) => (
              <div className={styles.item} key={index}>
                {item?.title ? (
                  <div className={styles.item_name}>
                    <div className={styles.title}>{item?.title}</div>
                    <div className={styles.description}>
                      {item?.description}
                    </div>
                  </div>
                ) : (
                  <div className={styles.item_name}>
                    {item?.practicess?.data?.attributes?.slug ? (
                      <Link
                        className={styles.name}
                        href={`practice-areas/${item?.practicess?.data?.attributes?.slug}`}
                      >
                        {item?.service_name}
                      </Link>
                    ) : (
                      <div className={styles.name}>{item?.service_name}</div>
                    )}

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
        </div>

        <div>
          {isMobile && (
            <div>
              {!showMore && (
                <Button
                  variant="secondary"
                  className={styles.show_more}
                  onClick={() => setShowMore(true)}
                >
                  Show more
                </Button>
              )}

              <div>
                {showMore && (
                  <div>
                    {attributes?.WeHandle?.WeHandleItemRight?.slice(1).map(
                      (item, index) => (
                        <div className={styles.item} key={index}>
                          {item?.title ? (
                            <div className={styles.item_name}>
                              <div className={styles.title}>{item?.title}</div>
                              <div className={styles.description}>
                                {item?.description}
                              </div>
                            </div>
                          ) : (
                            <div className={styles.item_name}>
                              <div className={styles.name}>
                                {item?.service_name}
                              </div>
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
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Handle;
