/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import emailjs from "emailjs-com";
import MarkdownIt from "markdown-it";
import { useState } from "react";
import { toast } from "react-toastify";

import { formatPhoneNumber } from "@/components/utils/formatNumber";

import { Button, Modal, Typography, VideoBackground } from "..";
import { Signup } from "../SignUp/Signup";

import styles from "./HomeBanner.module.scss";

export const HomeBanner = ({
  title,
  subTitle,
  button,
  buttonLink,
  data,
  isActive,
  setIsActive,
}) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedLicense, setSelectedLicense] = useState(null);

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

  const htmlSubTItle = md.render(subTitle);

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      ticketNumber: "",
      county: "",
    });

    setSelectedTicket(null);
    setSelectedLicense(null);
  };

  const openLinkInNewTab = () => {
    data?.forEach((item) => {
      if (formData.county === item.value) {
        window.open(item.url, "_blank");
      }
    });
  };

  const onClose = () => {
    setIsActive(false);
    setStep(0);
    setUserResponse(null);
    resetForm();
  };

  const handleNextClick = (e) => {
    e.preventDefault();
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
      // } else if (step === 1) {
      //   if (
      //     formData.fullName
      //     // formData.email &&
      //     // formData.phone &&
      //     // formData.ticketNumber
      //   ) {
      //     setStep(2);
      //   } else {
      //     toast.error("Please fill in all fields", {
      //       position: "top-center",
      //     });
      //   }
    } else if (step === 2) {
      if (formData.county) {
        setStep(3);
        openLinkInNewTab();
        onClose();
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

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = "service_lkur9lc";
    const templateID = "template_zjunwvt";
    const userId = "zGYrRPrkIqgG-X0hj";
    emailjs.sendForm(serviceID, templateID, e.target, userId).then(
      (response) => {
        setStatus("SUCCESS");
        data?.forEach((item) => {
          if (formData.county === item.value) {
            window.open(item.url);
          }
        });
        setStep(2);
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
        // onClose();
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

  const handleTicketChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2097152) {
      setSelectedTicket(file);
    } else {
      alert("File size should be less than 1MB.");
      e.target.value = null;
    }
  };

  const handleLicenseChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2097152) {
      setSelectedLicense(file);
    } else {
      alert("File size should be less than 1MB.");
      e.target.value = null;
    }
  };

  const handleClearTicket = () => {
    setSelectedTicket(null);
  };

  const handleClearLicense = () => {
    setSelectedLicense(null);
  };

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return `${str.slice(0, num)}...`;
  };

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

  const renderStep2 = () => (
    <>
      <Typography tag="div" className={styles.modal_title}>
        Contact Details
      </Typography>
      <form id="form" onSubmit={handleSubmitData}>
        <div className={styles.form_row}>
          <label htmlFor="fullName">
            Full Name: <span>*</span>
          </label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="email">
            Email: <span>*</span>
          </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="phone">
            Phone: <span>*</span>
          </label>
          <input
            type="tel"
            required
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.ticket_row}>
          <div>
            <label htmlFor="ticketNumber">Enter Ticket:</label>
            <div className={styles.ticket}>
              <input type="text" id="ticketNumber" name="ticketNumber" />
            </div>
          </div>

          <div>
            <label
              htmlFor="ticketNumberFile"
              className={styles.customFileUpload}
            >
              Upload the ticket
            </label>
            <input
              type="file"
              name="ticketNumberFile"
              id="ticketNumberFile"
              accept="image/png, application/pdf, image/jpeg"
              onChange={handleTicketChange}
              className={styles.upload_license}
            />
            {selectedTicket && (
              <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                Selected file: {truncateString(selectedTicket.name, 20)}
                <button onClick={handleClearTicket} type="button">
                  X
                </button>
              </p>
            )}
          </div>
        </div>
        <div className={styles.ticket_row}>
          <div>
            <label htmlFor="driversLicense" className={styles.customFileUpload}>
              Upload Drivers License *
            </label>
            <input
              type="file"
              name="driversLicense"
              id="driversLicense"
              accept="image/png, application/pdf, image/jpeg"
              onChange={handleLicenseChange}
              className={styles.upload_license}
            />

            {selectedLicense && (
              <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                Selected file: {truncateString(selectedLicense.name, 20)}
                <button onClick={handleClearLicense} type="button">
                  X
                </button>
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          variant="secondary"
          className={styles.modal_button}
        >
          Next
        </Button>
      </form>
    </>
  );

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
            <label htmlFor={item.idName}>
              {item.name} - <b>{item.price}</b>
            </label>
          </div>
        ))}
      </div>
      <Button
        variant="secondary"
        className={styles.modal_button}
        onClick={handleNextClick}
      >
        Submit
      </Button>
    </>
  );

  // const renderStep4 = () => {
  //   data?.map(
  //     (item) => formData.county === item.value && window.open(item.url)
  //   );
  // };

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.video}>
          <VideoBackground />
        </div>
        <div className="layout">
          <div className={styles.info}>
            <div className={styles.info_inner}>
              <h1 className={styles.title}>
                Traffic Ticket Lawyer <br />
                <span>New York</span>
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: htmlSubTItle }}
                className={styles.sub_title}
              />

              <div className={styles.buttons}>
                <a href={`${buttonLink}`} className={styles.button}>
                  <Button variant="secondary">{button}</Button>
                </a>

                <Signup isActive={isActive} setIsActive={setIsActive} />
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
