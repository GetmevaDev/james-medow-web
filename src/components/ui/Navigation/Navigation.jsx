import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./Navigation.module.scss";

export const navigation = [
  { id: 1, label: "Home", path: "/", subMenu: [] },
  { id: 2, label: "About Us", path: "/about-us", subMenu: [] },
  { id: 3, label: "Practice Areas", path: "/practice-areas", subMenu: [] },
  { id: 4, label: "Courts We Cover", path: "/courts-we-cover", subMenu: [] },
  { id: 5, label: "Reviews", path: "/reviews", subMenu: [] },
  { id: 6, label: "Contact Us", path: "/contact-us", subMenu: [] },
];

export const Navigation = ({ className, data }) => {
  const [nav, setNav] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  const router = useRouter();

  const renderSubMenu = (subMenuItems) => (
    <ul className={styles.sub_menu}>
      {subMenuItems.map((subMenuItem) => (
        <li key={subMenuItem.label} className={styles.sub_menu_item}>
          <Link href={subMenuItem.path} className={styles.sub_menu_link}>
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
        {data.map((item) => (
          <li key={item.label}>
            <Link
              href={item.link}
              onClick={() => handleClick(item)}
              className={
                router.pathname === item.link ? styles.active : styles.link
              }
            >
              {item.name}
            </Link>
            <span>{item.svg && item.svg}</span>
            {/* {item.subMenu.length > 0 && renderSubMenu(item.subMenu)} */}
          </li>
        ))}
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
