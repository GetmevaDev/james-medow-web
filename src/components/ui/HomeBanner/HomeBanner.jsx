/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import emailjs from "emailjs-com";
import MarkdownIt from "markdown-it";
import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

import { convertFileToBase64 } from "@/components/utils/convertFile";
import { formatPhoneNumber } from "@/components/utils/formatNumber";

import { Button, Modal, Typography, VideoBackground } from "..";

import styles from "./HomeBanner.module.scss";

export const HomeBanner = ({ title, subTitle, button, buttonLink, data }) => {
  const form = useRef();

  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [step, setStep] = useState(0);
  const [userResponse, setUserResponse] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ticketNumber: "",
    county: "",
    ticketFile: null,
    licenseFile: null,
  });

  const md = new MarkdownIt({
    html: true,
  });

  const htmlTitle = md.render(title);
  const htmlSubTItle = md.render(subTitle);

  const onClose = () => {
    setIsActive(false);
    setStep(0);
    setUserResponse(null);
  };

  const handleNextClick = () => {
    if (step === 0) {
      if (userResponse === "yes") {
        setStep(1);
      } else if (userResponse === "no") {
        setStep(-1);
      } else {
        toast.error("Please fill in all fields", {
          position: "top-center",
        });
      }
    } else if (step === 1) {
      if (
        formData.fullName &&
        formData.email &&
        formData.phone &&
        formData.ticketNumber
      ) {
        setStep(2);
      } else {
        toast.error("Please fill in all fields", {
          position: "top-center",
        });
      }
    } else if (step === 2) {
      if (formData.county) {
        setStep(3);
      } else {
        toast.error("Please fill in all fields", {
          position: "top-center",
        });
      }
    }
  };

  const handleRadioChange = (event) => {
    setUserResponse(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    }

    if (files) {
      const selectedFile = files[0];

      if (name === "ticketFile" && formData.ticketFile) {
        URL.revokeObjectURL(formData.ticketFile.preview);
      } else if (name === "licenseFile" && formData.licenseFile) {
        URL.revokeObjectURL(formData.licenseFile.preview);
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedFile,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    }
  };

  const handleTicketDrop = (acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      ticketFile: acceptedFiles[0],
    }));
  };

  const handleLicenseDrop = (acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      licenseFile: acceptedFiles[0],
    }));
  };

  const {
    getRootProps: getTicketRootProps,
    getInputProps: getTicketInputProps,
  } = useDropzone({
    accept: "image/*, application/pdf",
    maxFiles: 1,
    onDrop: handleTicketDrop,
  });

  const {
    getRootProps: getLicenseRootProps,
    getInputProps: getLicenseInputProps,
  } = useDropzone({
    accept: "image/*, application/pdf",
    maxFiles: 1,
    onDrop: handleLicenseDrop,
  });

  const renderStep1 = () => (
    <>
      <Typography tag="div" className={styles.modal_title}>
        Did you receive a ticket by <br /> a police officer?
      </Typography>
      <div className={styles.answers}>
        <div className={styles.answer}>
          <label htmlFor="Yes">
            <input
              name="choise"
              type="radio"
              aria-label="yes"
              value="yes"
              onChange={handleRadioChange}
            />
            Yes
          </label>
        </div>
        <div className={styles.answer}>
          <label htmlFor="No">
            <input
              name="choise"
              type="radio"
              aria-label="no"
              value="no"
              onChange={handleRadioChange}
            />
            No
          </label>
        </div>
      </div>
      <Button
        variant="secondary"
        className={styles.modal_button}
        onClick={handleNextClick}
      >
        Next
      </Button>
    </>
  );

  const renderStep2 = () => {
    const handleClearTicketFile = () => {
      setFormData((prevData) => ({
        ...prevData,
        ticketFile: null,
      }));
    };

    const handleClearLicenseFile = () => {
      setFormData((prevData) => ({
        ...prevData,
        licenseFile: null,
      }));
    };

    const handleSubmitData = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const ticketFileBase64 = await convertFileToBase64(formData.ticketFile);
      const licenseFileBase64 = await convertFileToBase64(formData.licenseFile);

      const formDataToSend = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        ticketNumber: formData.ticketNumber,
        county: formData.county,
        ticketFile: ticketFileBase64,
        licenseFile: licenseFileBase64,
      };

      emailjs
        .send(
          "service_ok9prgn",
          "template_ht0bvkp",
          formDataToSend,
          "user_iw2a3XOS7O7HrGbR8S31M"
        )
        .then(
          (response) => {
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
            setStep(2);
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

    return (
      <>
        <Typography tag="div" className={styles.modal_title}>
          Contact Details
        </Typography>
        <form ref={form}>
          <div className={styles.form_row}>
            <label htmlFor="fullName">
              Full Name: <span>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="email">
              Email: <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="phone">
              Phone: <span>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="ticketNumber">Enter Ticket:</label>
            <div className={styles.ticket}>
              <input
                type="text"
                id="ticketNumber"
                name="ticketNumber"
                value={formData.ticketNumber}
                onChange={handleInputChange}
              />

              <div>
                <div {...getTicketRootProps()}>
                  <Button variant="primary" className={styles.upload}>
                    <input {...getTicketInputProps()} name="ticketFile" />
                    <p>Upload the ticket</p>
                  </Button>
                </div>
                {formData.ticketFile && (
                  <div>
                    <span>{formData.ticketFile.name}</span>

                    <button
                      type="button"
                      className={styles.delete_button}
                      onClick={handleClearTicketFile}
                    >
                      &#10005;
                    </button>
                  </div>
                )}
              </div>
            </div>
            <Button
              variant="primary"
              className={styles.upload_license}
              {...getLicenseRootProps()}
            >
              <input {...getLicenseInputProps()} name="licenseFile" />
              <p>Upload Drivers License *</p>
            </Button>
            <div>
              {formData.licenseFile && (
                <>
                  <span>{formData.licenseFile.name}</span>
                  <button
                    type="button"
                    className={styles.delete_button}
                    onClick={handleClearLicenseFile}
                  >
                    &#10005;
                  </button>
                </>
              )}
            </div>
          </div>
          <Button
            type="submit"
            variant="secondary"
            className={styles.modal_button}
            onClick={handleSubmitData}
          >
            Next
          </Button>
        </form>
      </>
    );
  };
  const renderStep3 = () => (
    <>
      <Typography tag="div" className={styles.modal_title}>
        Which county did you <br /> receive the ticket in?
      </Typography>
      <div className={styles.county_options}>
        {data?.map((item) => (
          <div className={styles.county_option} key={item.id}>
            <input
              type="radio"
              id={item.idName}
              name="county"
              value={item.value}
              checked={formData.county === item.value}
              onChange={handleInputChange}
            />
            <label
              htmlFor={item.idName}
              dangerouslySetInnerHTML={{ __html: md.render(item.name) }}
            />
          </div>
        ))}
      </div>
      <Button
        variant="secondary"
        className={styles.modal_button}
        onClick={handleNextClick}
      >
        Next
      </Button>
    </>
  );

  const handleSubmit = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      ticketNumber: "",
      county: "",
    });

    onClose();
  };

  const renderStep4 = () => (
    <>
      {data?.map(
        (item) => formData.county === item.value && window.open(item.url)
      )}

      {/* {formData.county === "Queens, Brooklyn - $400" &&
        window.open(
          "https://eform.pandadoc.com/?eform=1e87c243-62bb-476f-adcb-594bf6deb202"
        )} */}

      {handleSubmit()}
    </>
  );

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.video}>
          <VideoBackground />
        </div>
        <div className="layout">
          <div className={styles.info}>
            <div className={styles.info_inner}>
              <div
                dangerouslySetInnerHTML={{ __html: htmlTitle }}
                className={styles.title}
              />
              <div
                dangerouslySetInnerHTML={{ __html: htmlSubTItle }}
                className={styles.sub_title}
              />

              <div className={styles.buttons}>
                <a href={`${buttonLink}`} className={styles.button}>
                  <Button variant="secondary">{button}</Button>
                </a>

                <Button variant="primary" onClick={() => setIsActive(true)}>
                  Sign Up Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isActive && (
        <Modal onClose={onClose} isActive={isActive}>
          {step === 0 && renderStep1()}
          {step === 1 && renderStep2()}
          {step === 2 && renderStep3()}
          {step === 3 && renderStep4()}
          {step === -1 && (
            <>
              <Typography tag="div" className={styles.modal_title}>
                We're sorry but we do not offer <br /> representation for
                violations that are <br /> not written by a police officer.
              </Typography>
              <Button
                variant="secondary"
                className={styles.modal_button}
                onClick={onClose}
              >
                CLOSE
              </Button>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

// jamesmedows@gmail.com
