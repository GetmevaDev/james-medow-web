"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Button } from "@/components/ui";
import { truncateText } from "@/components/utils/truncateText";

import styles from "./HeaderTest.module.scss";

export const HeaderTest = ({ menus }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [submenuVisibility, setSubmenuVisibility] = useState(true);
  const router = useRouter();
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

  const renderSubMenuItems = (items) => (
    <div className={styles.sub_menu_children}>
      {items?.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={
            router.pathname === item.path
              ? styles.item_link_active
              : styles.item_link
          }
        >
          {truncateText(item.itemText, 50)}
        </Link>
      ))}
    </div>
  );

  const renderSubMenu = (subMenu) => (
    <div className={styles.sub_main}>
      <div className={styles.sub_menu_left}>
        {subMenu?.map((menuItem) => (
          <div className={styles.sub_menu_item} key={menuItem.id}>
            <Link
              onMouseEnter={() => handleMouseEnter(menuItem.id)}
              onMouseLeave={handleMouseLeave}
              className={classNames(
                router.pathname === menuItem.path
                  ? styles.sub_menu_item_link_active
                  : styles.sub_menu_item_link,
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
                  submenuVisibility === menuItem.id && styles.icon_rotated
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
        ))}
      </div>

      <div className={styles.sub_menu_right}>
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
  );

  return (
    <header className={styles.header}>
      <div className="layout">
        <div className={styles.block}>
          <div className={styles.header_inner}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  width={170}
                  height={130}
                  alt="logo"
                  src="/images/logo.svg"
                />
              </Link>
            </div>

            <div className={styles.menu}>
              {menus?.map((item) => (
                <li key={item.id} className={styles.label}>
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

                  {item.attributes?.SubMenu.length > 0 && (
                    <div className={styles.sub_panel}>
                      <div className={styles.sub_card}>
                        {renderSubMenu(item.attributes?.SubMenu)}
                        {/* {item.attributes?.SubMenu.map((subMenuItem) => (
                              <div
                                className={styles.sub_menu_item}
                                key={subMenuItem.id}
                              >
                                {subMenuItem.label}
                              </div>
                            ))} */}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </div>

            <div className={styles.button_inner}>
              <Button variant="secondary" className={styles.button}>
                <a href="tel: 929-205-4935">Click to call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
