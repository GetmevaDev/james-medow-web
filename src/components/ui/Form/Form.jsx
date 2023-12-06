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
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!phoneNumber.trim() || !name.trim()) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6Im9yZ18yVXdSMDNzbUplU2FQRGJKRHl4Rmp1UG1FQ1kiLCJpYXQiOjE3MDE0MTE2NDV9.sdpQj5DrwHSY85_6k5Y2BpkOlDj444aW7Ak37k_bdLo";

    try {
      const response = await fetch("https://chat.air.ai/api/v1/calls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer  ${token}`,
        },
        body: JSON.stringify({
          promptId: 29212,
          metaData: {},
          phone: phoneNumber,
          name,
        }),
      });
      await response.json();

      setStatus("SUCCESS");
      toast.success("Your information has been submitted successfully.");
    } catch (error) {
      toast.error("Something went wrong with the API request.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "phoneNumber") {
      const formattedValue = formatPhoneNumber(value);
      setPhoneNumber(formattedValue);
    } else if (name === "name") {
      setName(value);
    }
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
              htmlFor="name"
              className={styles.label}
              label="enter your name"
            >
              Enter your name
              <input
                type="text"
                id="name"
                required
                className={styles.input}
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </label>

            <label
              htmlFor="phone"
              className={styles.label}
              label="enter your phone"
            >
              Enter your phone number
              <input
                type="tel"
                required
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
