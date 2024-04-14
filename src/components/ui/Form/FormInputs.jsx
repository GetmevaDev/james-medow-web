import React, { memo } from "react";
import InputMask from "react-input-mask";

import styles from "./Form.module.scss";

export const FormInputs = memo(
  ({ name, phoneNumber, handleNameChange, handlePhoneChange, isLoading }) => (
    <div className={styles.formData}>
      <div>
        <label htmlFor="name" className={styles.label} label="enter your name">
          Enter your name
          <input
            type="text"
            id="name"
            required
            className={styles.input}
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>

      <div>
        <label
          htmlFor="phone"
          className={styles.label}
          label="enter your phone"
        >
          Enter your phone number
          <InputMask
            mask="+1 (999) 999-9999"
            maskChar="_"
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+1 (___) ___-____"
            name="phoneNumber"
            required
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.checkbox}>
        <label htmlFor="agree" className={styles.label}>
          <input type="checkbox" id="agree" required /> I confirm that I agree
          to receive notifications from James Medows via SMS
        </label>
      </div>

      <button
        className={`button-loader ${isLoading ? "loading" : ""}`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <span className="loader" /> : "Submit Phone Number"}
      </button>
    </div>
  )
);
