import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import { navigation, navigation1 } from "..";

import styles from "./NavigationTest.module.scss";

export const NavigationTest = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  const router = useRouter();

  const renderSubMenuItems = (items) => (
    <div className={styles.sub_menu_items}>
      {items?.map((item) => (
        <Link
          href="/#"
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
      <div>
        {subMenu.map((menuItem) => (
          <div key={menuItem.id} className={styles.block}>
            <div className={styles.left_block}>
              <p className={styles.sub_menu_heading}>{menuItem.item}</p>
              <span>
                {menuItem?.icon && (
                  <div>
                    <FaChevronRight className={styles.icon} />
                  </div>
                )}
              </span>
            </div>

            <div className={styles.right_block}>
              {renderSubMenuItems(menuItem.items)}
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
          {navigation1
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
        </ul>
      </nav>
    </div>
  );
};
