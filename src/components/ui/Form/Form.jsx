import MarkdownIt from "markdown-it";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useDebounce } from "@/components/hooks/useDebounce";

import { FadeIn } from "../../animations/FadeIn/FadeIn";

import { FormInputs } from "./FormInputs";

import styles from "./Form.module.scss";

const Form = ({ htmlSubCall }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const md = new MarkdownIt({
    html: true,
  });

  const subCall = htmlSubCall ? md.render(htmlSubCall) : htmlSubCall;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!phoneNumber.trim() || !name.trim()) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/v1/calls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6Im9yZ18yVXdSMDNzbUplU2FQRGJKRHl4Rmp1UG1FQ1kiLCJpYXQiOjE3MDE5MjY3NDd9.N7xeB-fndbZiL22ZuxrV9CFVFgl_vrngPQ3DGGZ9uuI",
        },
        body: JSON.stringify({
          promptId: 72271,
          metaData: {},
          phone: phoneNumber,
          name,
        }),
      });
      await response.json();

      if (response.ok) {
        setStatus("SUCCESS");
        toast.success("Your information has been submitted successfully.");
        setPhoneNumber("");
        setName("");
      } else {
        toast.error("Something went wrong with the API request.");
      }
    } catch (error) {
      toast.error("Something went wrong with the API request.");
    } finally {
      setIsLoading(false);
      setPhoneNumber("");
      setName("");
    }
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handlePhoneChange = useCallback((event) => {
    setPhoneNumber(event.target.value);
  }, []);

  return (
    <FadeIn>
      <div className={styles.contact}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div
            className={styles.call}
            dangerouslySetInnerHTML={{ __html: subCall }}
          />
          <FormInputs
            name={name}
            isLoading={isLoading}
            phoneNumber={phoneNumber}
            handleNameChange={handleNameChange}
            handlePhoneChange={handlePhoneChange}
          />
        </form>
      </div>
    </FadeIn>
  );
};

export default Form;
