import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import styles from "./Form.module.scss";

export const Form = ({ htmlSubCall }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    emailjs
      .send(
        "service_ok9prgn",
        "template_ht0bvkp",
        { phoneNumber },
        "user_iw2a3XOS7O7HrGbR8S31M"
      )
      .then(
        (response) => {
          setPhoneNumber("");
          setStatus("SUCCESS");
          toast.success(
            "Thank you for you submitting your information. A representative will contact you soon.",
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        },
        (error) => {
          toast.error("Something went wrong", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      let formattedValue = "";
      if (match[1]) {
        formattedValue += `(${match[1]}`;
      }
      if (match[2]) {
        formattedValue += `) ${match[2]}`;
      }
      if (match[3]) {
        formattedValue += `-${match[3]}`;
      }
      return formattedValue;
    }
    return cleanedValue;
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  return (
    <div className={styles.contact}>
      <form onSubmit={handleSubmit}>
        <div
          className={styles.call}
          dangerouslySetInnerHTML={{ __html: htmlSubCall }}
        />
        <label
          htmlFor="phone"
          className={styles.label}
          label="enter your phone"
        >
          Enter your phone number
          <input
            type="tel"
            id="phone"
            className={styles.input}
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
          />
        </label>

        <button
          className={`button-loader ${isLoading ? "loading" : ""}`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <span className="loader" /> : "Submit Phone Number"}
        </button>
      </form>
    </div>
  );
};
