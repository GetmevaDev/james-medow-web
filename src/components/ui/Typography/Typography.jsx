import classNames from "classnames";
import React from "react";

import styles from "./Typography.module.scss";

const sizes = {
  default: styles.default,
  medium: styles.medium,
  large: styles.large,
};

const colors = {
  white: styles.white,
  black: styles.black,
  primary: styles.primary,
};

const tops = {
  default: styles.default_top,
  big: styles.big_top,
};

const transforms = {
  uppercase: styles.uppercase,
  capitalize: styles.capitalize,
};

export const Typography = ({
  tag = "h1",
  size = "default",
  color = "black",
  transform = "uppercase",
  top = "default",
  children,
  className,
}) => {
  const Component = tag;
  return (
    <Component
      className={classNames(
        styles.typography,
        tops[top],
        className,
        sizes[size],
        colors[color],
        transforms[transform]
      )}
    >
      {children}
    </Component>
  );
};
