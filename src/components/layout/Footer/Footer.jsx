import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

import { navigation } from "@/components/ui";

import styles from "./Footer.module.scss";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Footer = () => {
  const router = useRouter();

  const {
    data: footer,
    isError,
    isLoading,
  } = useSWR(
    "https://cms-james-medows.herokuapp.com/api/layout?populate=deep",
    // "http://localhost:1337/api/layout?populate=deep",
    fetcher
  );

  if (isLoading) {
    return null;
  }

  if (isError) return <div>Error...</div>;

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image width={225} height={40} alt="logo" src="/images/logo.svg" />
        </Link>
      </div>

      <div className="layout">
        <ul className={styles.menu}>
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                onClick={() => handleClick(item)}
                className={
                  router.pathname === item.path ? styles.active : styles.link
                }
              >
                {item.label}
              </Link>
              <span>{item.svg && item.svg}</span>
              {item.subMenu.length > 0 && renderSubMenu(item.subMenu)}
            </li>
          ))}
        </ul>

        <div className={styles.footer_location}>
          <div className={styles.locations}>
            {footer?.data?.attributes?.Footer?.Address?.map((item) => (
              <div className={styles.location} key={item.id}>
                <Image
                  width={50}
                  height={50}
                  src={item?.svg?.data?.attributes?.url}
                  alt={item?.svg?.data?.attributes?.alternativeText}
                />

                <div className={styles.text}>
                  <div className={styles.title}>{item.title}</div>
                  <p className={styles.sub_title}>{item.sub_title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.images}>
            {footer?.data?.attributes?.Footer?.Images?.data?.map((image) => (
              <div className={styles.location_image} key={image.id}>
                <Image
                  width={image?.attributes?.width}
                  height={image?.attributes?.height}
                  src={image?.attributes?.url}
                  alt={image?.attributes?.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.border} />

        <div className={styles.date}>
          © {new Date().getFullYear()} James Medows All rights reserved.
        </div>
      </div>

      <div className={styles.important}>
        <div className="layout">
          <div className={styles.title_important}>IMPORTANT NOTICE</div>
          <div className={styles.description_important}>
            {footer?.data?.attributes?.Footer?.description}
          </div>
        </div>
      </div>

      <div className="layout">
        <div className={styles.footer_bottom}>
          <ul className={styles.footer_bottom__links}>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>

            <li>
              <Link href="/accessibility-policy">
                Accessibility Policy and Commitment Statement
              </Link>
            </li>
          </ul>

          <div className={styles.name}>
            This website is attorney advertising and is administered by
            <span> Robert Gerov Media</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
