import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useSize } from "@/components/hooks/useResizeObserver";

import { Button } from "..";

import styles from "./NavigationTest.module.scss";

export const NavigationTest = ({ menus }) => {
  const [submenuVisibility, setSubmenuVisibility] = useState(true);
  const router = useRouter();

  const toggleSubmenu = (id) => {
    if (submenuVisibility === id) {
      setSubmenuVisibility(null);
    } else {
      setSubmenuVisibility(id);
    }
  };

  const renderSubMenuItems = (items, id) => (
    submenuVisibility === id && (
      <div className={styles.sub_menu_items}>
        {items?.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className={
              router.pathname === item.path ? styles.subMenu_item_active : styles.subMenu_item_link
            }
          >
            {item.itemText}
          </Link>
        ))}
      </div>
    )
  );

  const renderSubMenu = (subMenu) => (
    <div className={styles.sub_menu}>
      <div
        className={styles.sub_menu_inner}
      >
        <div className={styles.left_block_inner}>
          {subMenu?.map((menuItem) => (
            <div key={menuItem.id} className={styles.block}>
              <div
                className={styles.left_block}
              >
                <Link
                  className={
                  classNames(
                    router.pathname === menuItem.path ? styles.active : styles.link,
                    menuItem.icon && styles.icon_subMenu
                  )
                }
                  href={menuItem?.path}
                >
                  {menuItem?.label}
                </Link>

                {menuItem.icon && (
                <div
                  role="button"
                  tabIndex={0}
                  className={styles.button_icon}
                  onClick={() => toggleSubmenu(menuItem.id)}
                >
                  {submenuVisibility === menuItem.id ? <FaChevronLeft /> : <FaChevronRight />}
                </div>
              )}
              </div>

            </div>
        ))}
        </div>

        <div>
          {subMenu?.map((menuItem) => (
            <div>
              {submenuVisibility && menuItem?.SubMenuItems.length > 0 && (
              <div
                className={`${styles.right_block} ${submenuVisibility === menuItem.id ? styles.open : ""}`}
              >
                {renderSubMenuItems(menuItem?.SubMenuItems, menuItem.id)}
              </div>
          )}
            </div>
        ))}
        </div>

      </div>
    </div>
  );

  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {menus?.sort((a, b) => a.id - b.id)?.map((item) => (
            <li key={item.id}>
              <Link
                href={item?.attributes?.path}
                onClick={() => handleClick(item?.attributes)}
                className={
                    classNames(
                      router.pathname === item?.attributes?.path ? styles.active : styles.link,
                      item?.attributes?.icon && styles.icon
                    )
                }
              >
                {item?.attributes?.label}
              </Link>
              {item?.attributes?.SubMenu?.length > 0 && renderSubMenu(item?.attributes?.SubMenu)}
            </li>
          ))}
          <a href="tel: 929-205-4935">
            <Button variant="secondary" className={styles.button}>
              Click to call
            </Button>
          </a>
        </ul>

      </nav>
    </div>
  );
};
