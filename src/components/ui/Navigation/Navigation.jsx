import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import { Button } from "..";

import styles from "./Navigation.module.scss";

export const navigation = [
  { id: 1, label: "Home", path: "/", subMenu: [] },
  {
    id: 2,
    label: "About Us",
    path: "/about-us",
    icon: true,
    subMenu: [
      {
        label: " Meet James Medows",
        path: "/meet-james-medows",
      },
      {
        label: "Courts We Cover",
        path: "/courts-we-cover",
      },
    ],
  },
  { id: 3, label: "Practice Areas", path: "/practice-areas", subMenu: [] },
  {
    id: 4,
    label: "DRAF",
    path: "/drivers-responsibility-assessment-fee",
    subMenu: [],
  },
  {
    id: 5,
    label: "Trucking Tickets",
    path: "/new-yorks-leading-traffic-ticket-defender-for-truckers",
    subMenu: [],
  },
  { id: 6, label: "Reviews", path: "/reviews", subMenu: [] },
  { id: 7, label: "Contact Us", path: "/contact-us", subMenu: [] },
  { id: 8, label: "Blog", path: "/blog", subMenu: [] },
];

export const Navigation = ({ className }) => {
  const [nav, setNav] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  const router = useRouter();

  const renderSubMenu = (subMenuItems) => (
    <ul className={styles.sub_menu}>
      {subMenuItems?.map((subMenuItem) => (
        <li key={subMenuItem.label} className={styles.sub_menu_item}>
          <Link
            href={subMenuItem.path}
            className={
              router.pathname === subMenuItem?.path
                ? styles.active
                : styles.link
            }
          >
            {subMenuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.navigation}>
      <ul
        className={classNames(
          nav ? [styles.menu, styles.active].join(" ") : [styles.menu],
          {},
          [className]
        )}
      >
        {navigation
          ?.sort((a, b) => a.id - b.id)
          .map((item) => (
            <li key={item.id}>
              <Link
                href={item?.path}
                onClick={() => handleClick(item?.attributes)}
                className={
                  router.pathname === item?.path ? styles.active : styles.link
                }
              >
                {item?.label}
              </Link>

              <span>
                {item?.icon && (
                  <div>
                    <FaChevronDown className={styles.icon} />
                  </div>
                )}
              </span>
              {item?.subMenu?.length > 0 && renderSubMenu(item?.subMenu)}
            </li>
          ))}

        <a href="tel: 929-205-4935">
          <Button variant="secondary" className={styles.button}>
            Click to call
          </Button>
        </a>
      </ul>

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <i className="bx bx-window-close bx-rotate-180" />
        ) : (
          <i className="bx bx-menu-alt-right" />
        )}
      </div>
    </nav>
  );
};
