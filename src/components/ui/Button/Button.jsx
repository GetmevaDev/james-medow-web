import classNames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Button = ({
  type = "button",
  children,
  className,
  disabled,
  variant = "primary",
  ...props
}) => {
  const classes = classNames(styles.button, className, variants[variant]);

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classes} {...props} disabled={disabled}>
      {children}
    </button>
  );
};
