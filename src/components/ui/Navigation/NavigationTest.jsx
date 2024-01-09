import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import { Button } from "..";

import styles from "./NavigationTest.module.scss";

export const NavigationTest = ({ menus }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  const router = useRouter();

  const renderSubMenuItems = (items) => (
    <div className={styles.sub_menu_items}>
      {items?.map((item) => (
        <Link
          href={item.path}
          key={item.id}
          className={
            router.pathname === item.path ? styles.active : styles.link
          }
        >
          {item.itemText}
        </Link>
      ))}
    </div>
  );

  const renderSubMenu = (subMenu) => (
    <div className={styles.sub_menu}>
      <div className={styles.sub_menu_inner}>
        {subMenu?.map((menuItem) => (
          <div key={menuItem.id}>
            <div className={styles.block}>
              <div className={styles.left_block}>
                <Link
                  className={
                  router.pathname === menuItem.path ? styles.active : styles.link
                }
                  href={menuItem?.path}
                > {menuItem?.label}
                </Link>
                <span>
                  {menuItem?.icon && (
                  <div>
                    <FaChevronRight className={styles.icon} />
                  </div>
                )}
                </span>
              </div>

              {menuItem?.SubMenuItems.length > 0 && (
              <div className={styles.right_block}>
                {renderSubMenuItems(menuItem?.SubMenuItems)}
              </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {menus?.sort((a, b) => a.id - b.id)
          .map((item) => (
            <li key={item.id}>
              <Link
                href={item?.attributes?.path}
                onClick={() => handleClick(item?.attributes)}
                className={
                  router.pathname === item?.attributes?.path ? styles.active : styles.link
                }
              >
                {item?.attributes?.label}
              </Link>

              <span>
                {item?.attributes?.icon && (
                <FaChevronDown className={styles.icon} />
                )}
              </span>
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
