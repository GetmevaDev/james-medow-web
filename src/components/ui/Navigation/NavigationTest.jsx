import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { truncateText } from "@/components/utils/truncateText";

import { Button } from "..";

import styles from "./NavigationTest.module.scss";

export const NavigationTest = ({ menus }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [submenuVisibility, setSubmenuVisibility] = useState(true);

  const timeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(id);
  };

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  const handleSubMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSubMenuLeave = () => {
    setIsHovered(false);
  };

  const router = useRouter();

  const renderSubMenuItems = (items) => (
    <div className={styles.sub_menu_items}>
      {items?.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={
            router.pathname === item.path
              ? styles.subMenu_item_active
              : styles.subMenu_item_link
          }
        >
          {truncateText(item.itemText, 50)}
        </Link>
      ))}
    </div>
  );

  const renderSubMenu = (subMenu) => (
    <div className={styles.sub_menu}>
      <div className={styles.sub_menu_inner}>
        <div className={styles.left_block_inner}>
          {subMenu?.map((menuItem) => (
            <div key={menuItem.id} className={styles.block}>
              <div className={styles.left_block}>
                <div className={styles.icon_inner}>
                  <Link
                    onMouseEnter={() => handleMouseEnter(menuItem.id)}
                    onMouseLeave={handleMouseLeave}
                    className={classNames(
                      router.pathname === menuItem.path
                        ? styles.active
                        : styles.link,
                      menuItem.icon && styles.icon_subMenu,
                      isHovered === menuItem.id && styles.left_block_hovered
                    )}
                    href={menuItem?.path}
                  >
                    {menuItem?.label}
                  </Link>

                  {menuItem.icon && (
                    <div
                      role="button"
                      tabIndex={0}
                      className={classNames(
                        styles.button_icon,
                        submenuVisibility === menuItem.id && styles.icon_rotated // Apply rotation if this submenu is visible
                      )}
                    >
                      {isHovered === menuItem.id ? (
                        <FaChevronLeft />
                      ) : (
                        <FaChevronRight />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {subMenu?.map((menuItem) => (
            <div
              className={styles.right_block_inner}
              onMouseEnter={handleSubMenuEnter}
              onMouseLeave={handleSubMenuLeave}
            >
              {isHovered === menuItem.id && (
                <div className={styles.right_block}>
                  {renderSubMenuItems(menuItem?.SubMenuItems)}
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
          {menus
            ?.sort((a, b) => a.id - b.id)
            .map((item, index) => (
              <li key={index}>
                <Link
                  href={item?.attributes?.path}
                  className={classNames(
                    router.pathname === item?.attributes?.path
                      ? styles.active
                      : styles.link,
                    item?.attributes?.icon && styles.icon
                  )}
                >
                  {item?.attributes?.label}
                </Link>
                {item?.attributes?.SubMenu?.length > 0 &&
                  renderSubMenu(item?.attributes?.SubMenu)}
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
