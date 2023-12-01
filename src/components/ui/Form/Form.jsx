import emailjs from "emailjs-com";
import MarkdownIt from "markdown-it";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { formatPhoneNumber } from "@/components/utils/formatNumber";

import { FadeIn } from "../../animations/FadeIn/FadeIn";

import styles from "./Form.module.scss";

export const Form = ({ htmlSubCall }) => {
  const [isLoading, setIsLoading] = useState(false);

  const md = new MarkdownIt({
    html: true,
  });

  const subCall = md.render(htmlSubCall);

  const [phoneNumber, setPhoneNumber] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!phoneNumber.trim()) {
      toast.error("Fill in the field");
      setIsLoading(false);
      return;
    }
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
            "Thank you for you submitting your information. A representative will contact you soon",
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

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);

    setPhoneNumber(formattedValue);
  };

  return (
    <FadeIn>
      <div className={styles.contact}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div
            className={styles.call}
            dangerouslySetInnerHTML={{ __html: subCall }}
          />
          <div>
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
          </div>
        </form>
      </div>
    </FadeIn>
  );
};
