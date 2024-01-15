/* eslint-disable react/jsx-curly-newline */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Button } from "..";

import styles from "./Navigation.module.scss";

export const Navigation = ({ className, menus }) => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (id) => {
    if (activeSubMenu === id) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(id);
    }
  };
  const renderSubMenu = (subMenuItems, id) => (
    <ul
      className={`${styles.sub_menu} ${
        activeSubMenu === id ? styles.sub_menu_active : ""
      }`}
    >
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
        {menus
          ?.sort((a, b) => a.id - b.id)
          .map((item) => (
            <>
              <li key={item.id}>
                <Link
                  href={item?.attributes?.path}
                  className={
                    router.pathname === item?.attributes?.path
                      ? styles.active
                      : styles.link
                  }
                >
                  {item?.attributes?.label}
                </Link>

                <div
                  onClick={() =>
                    item?.attributes?.SubMenu?.length > 0 &&
                    toggleSubMenu(item.id)
                  }
                >
                  {item?.attributes?.icon && (
                    <div>
                      {activeSubMenu === item.id ? (
                        <FaChevronDown className={styles.icon} />
                      ) : (
                        <FaChevronUp />
                      )}
                    </div>
                  )}
                </div>
              </li>
              {item?.attributes?.SubMenu?.length > 0 &&
                renderSubMenu(item?.attributes?.SubMenu, item.id)}
            </>
          ))}

        <a href="tel: 929-205-4935">
          <Button variant="secondary" className={styles.button}>
            Click to call
          </Button>
        </a>
      </ul>

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <i className="bx bx-x bx-sm" />
        ) : (
          <i className="bx bx-menu bx-sm" />
        )}
      </div>
    </nav>
  );
};
