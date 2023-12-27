import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

import { useMediaQuery } from "@/components/hooks";
import { Button, navigation } from "@/components/ui";
import { Signup } from "@/components/ui/SignUp/Signup";

import styles from "./Footer.module.scss";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Footer = ({ isActive, setIsActive, data, courts }) => {
  const router = useRouter();

  const isMatches = useMediaQuery("(max-width: 480px)");

  const sortingData = courts?.sort((a, b) => a.id - b.id);

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image width={225} height={40} alt="logo" src="/images/logo.svg" />
        </Link>
      </div>

      <div className="layout">
        <ul className={styles.menu}>
          {navigation?.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                className={
                  router.pathname === item.path ? styles.active : styles.link
                }
              >
                {item.label}
              </Link>
              {/* <span>{item.svg && item.svg}</span>
              {item.subMenu.length > 0 && renderSubMenu(item.subMenu)} */}
            </li>
          ))}
        </ul>

        <div className={styles.footer_location}>
          <div>
            <div className={styles.courts_title}>Courts We Cover</div>

            <ul className={styles.courts_list}>
              {sortingData?.map((item) => (
                <li key={item.id}>
                  <Link href={`/courts-we-cover/${item?.attributes?.slug}`}>
                    {item?.attributes?.short_name_title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.locations}>
            {data?.attributes?.Footer?.Address?.map((item) => (
              <div className={styles.location} key={item.id}>
                <Image
                  width={50}
                  height={50}
                  src={item?.svg?.data?.attributes?.url}
                  alt="location new-york"
                />

                <div className={styles.text}>
                  <div className={styles.title}>{item.title}</div>
                  <p className={styles.sub_title}>{item.sub_title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.images}>
            {data?.attributes?.Footer?.Images?.data?.map((image) => (
              <div className={styles.location_image} key={image.id}>
                <Image
                  width={image?.attributes?.width}
                  height={image?.attributes?.height}
                  src={image?.attributes?.url}
                  alt="location long-island"
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
            {data?.attributes?.Footer?.description}
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

      {isMatches && (
        <div className={styles.buttons}>
          <a href="tel:929-205-4935">
            <Button variant="secondary" className={styles.button}>
              CLICK TO CALL
            </Button>
          </a>

          <Signup
            isActive={isActive}
            setIsActive={setIsActive}
            className={styles.sign_up}
          />
        </div>
      )}
    </footer>
  );
};
