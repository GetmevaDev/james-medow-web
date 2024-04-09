/* eslint-disable react/button-has-type */
import Image from "next/image";
import React from "react";

import styles from "./Modal.module.scss";

const Modal = ({ onClose, children, isActive }) => {
  React.useEffect(() => {
    if (isActive) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
    }

    return () => {
      document.documentElement.style.overflowY = "";
    };
  }, [isActive]);

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.closeButton} onClick={onClose}>
          <Image width={30} height={30} src="/images/close.svg" alt="close" />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
