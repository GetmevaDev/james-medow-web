/* eslint-disable simple-import-sort/imports */
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
  dataTickets,
  isActive,
  setIsActive,
}) => {
  const [moreThanThreeTickets, setMoreThanThreeTickets] = useState(null);

  const [step, setStep] = useState(0);
  const [userResponse, setUserResponse] = useState(null);
  const [moreTickets, setMoreTickets] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    county: "",
    ticketNumber: "",
    ticketNumberFile: null,
    driverLicense: null,
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
      ticketNumberFile: null,
      driverLicense: null,
    });
    setMoreTickets(null);
  };

  const openLinkInNewTab = () => {
    data?.forEach((item) => {
      if (formData.county === item.value) {
        window.open(item.url, "_blank");
      }
    });
  };

  const openLinkInNewTabTickets = () => {
    dataTickets?.forEach((item) => {
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
    } else if (step === 1) {
      if (moreTickets === "yes") {
        setStep(2);
      } else if (moreTickets === "no") {
        setStep(2);
      } else {
        toast.error("Please fill in all fields", {
          position: "top-center",
        });
      }
    } else if (step === 3) {
      if (formData.county) {
        if (moreTickets === "yes") {
          setStep(4);
          openLinkInNewTabTickets();
          onClose();
        } else if (moreTickets === "no") {
          setStep(4);
          openLinkInNewTab();
          onClose();
        }
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

  const handleRadioTicketsChange = (event) => {
    setMoreTickets(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    }

    if (files) {
      const selectedFile = files[0];

      if (name === "ticketNumberFile" && formData.ticketNumberFile) {
        URL.revokeObjectURL(formData.ticketNumberFile.preview);
      } else if (name === "driverLicense" && formData.driverLicense) {
        URL.revokeObjectURL(formData.driverLicense.preview);
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

  const submitForm = (e) => {
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        toast.success("Successfully submitted!");
        setStep(3);
      })
      .catch((error) => {
        setStep(2);
        toast.error("Failed to submit. Please try again.");
      });
  };
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return `${str.slice(0, num)}...`;
  };

  const handleFileRemove = (fileType) => {
    if (fileType === "ticketNumberFile") {
      URL.revokeObjectURL(formData.ticketNumberFile.preview);
      setFormData({ ...formData, ticketNumberFile: null });
    } else if (fileType === "driverLicense") {
      URL.revokeObjectURL(formData.driverLicense.preview);
      setFormData({ ...formData, driverLicense: null });
    }
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
        Did you receive 3 or more tickets from the same police officer?
      </Typography>
      <div className={styles.answers}>
        <div className={styles.answer}>
          <label htmlFor="Yes">
            <input
              name="choise_tickets"
              type="radio"
              aria-label="yes"
              required
              value="yes"
              onChange={handleRadioTicketsChange}
            />
            Yes
          </label>
        </div>
        <div className={styles.answer}>
          <label htmlFor="No">
            <input
              name="choise_tickets"
              type="radio"
              required
              aria-label="no"
              value="no"
              onChange={handleRadioTicketsChange}
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

  const renderStep3 = () => (
    <>
      <Typography tag="div" className={styles.modal_title}>
        Contact Details
      </Typography>
      <form
        method="POST"
        action="https://www.formbackend.com/f/0323fc2ef5151f72"
        onSubmit={submitForm}
      >
        <div className={styles.form_row}>
          <label htmlFor="fullName">
            Full Name: <span>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
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
            required
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
            <div className={styles.ticket} value={formData.ticketNumber}>
              <input
                type="text"
                id="ticketNumber"
                name="ticketNumber"
                onChange={handleInputChange}
              />
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
              onChange={handleInputChange}
              className={styles.upload_license}
            />
            {formData?.ticketNumberFile && (
              <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                Selected file:{" "}
                {truncateString(formData.ticketNumberFile.name, 20)}
                <button
                  type="button"
                  onClick={() => handleFileRemove("ticketNumberFile")}
                >
                  X
                </button>
              </p>
            )}
          </div>
        </div>
        <div className={styles.ticket_row}>
          <div>
            <label htmlFor="driverLicense" className={styles.customFileUpload}>
              Upload Drivers License *
            </label>
            <input
              type="file"
              name="driverLicense"
              id="driverLicense"
              accept="image/png, application/pdf, image/jpeg"
              onChange={handleInputChange}
              className={styles.upload_license}
            />

            {formData.driverLicense && (
              <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                Selected file: {truncateString(formData.driverLicense.name, 20)}
                <button
                  type="button"
                  onClick={() => handleFileRemove("driverLicense")}
                >
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

  const renderStep4 = () => (
    <>
      <Typography tag="div" className={styles.modal_title}>
        Which county did you <br /> receive the ticket in?
      </Typography>
      <div className={styles.county_options}>
        {moreTickets === "no" ? (
          <div>
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
        ) : (
          <div>
            {dataTickets?.map((item) => (
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
        )}
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
