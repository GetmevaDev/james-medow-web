import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoStarFill } from "react-icons/go";
import { IoLogoGoogle } from "react-icons/io";
import { toast } from "react-toastify";

import { Button } from "..";

import styles from "./Rating.module.scss";

export const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    data.append("review", feedback);

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
        setFeedback("");
        setRating(0);
        setHover(0);
      })
      .catch((error) => {
        toast.error("Failed to submit. Please try again.");
      });
  };
  return (
    <div>
      <h2 className={styles.title}>Step 1:</h2>
      <div className={styles.description}>
        Thank you for visiting Traffic Ticket Lawyer, please take a moment to
        leave feedback.
      </div>

      <div className={styles.star_rating}>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={classNames(
                styles.button,
                index <= (hover || rating) ? styles.on : styles.off
              )}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
              }}
            >
              <span className="star">
                <GoStarFill />
              </span>
            </button>
          );
        })}
      </div>

      {rating > 0 && rating < 5 && (
        <div className={styles.step2}>
          <h2 className={styles.title}>Step 2:</h2>
          <p className={styles.description}>
            Please let us know in the text box below what we can do to improve
            our service.
          </p>
          <form
            acceptCharset="UTF-8"
            className={styles.form}
            action="https://www.formbackend.com/f/6f02367c305cc066"
            method="POST"
            onSubmit={submitForm}
          >
            <textarea
              value={feedback}
              name="review"
              className={styles.textarea}
              placeholder="Please write a review"
              onChange={(e) => setFeedback(e.target.value)}
            />
            <Button type="submit" className={styles.send}>
              Send
            </Button>
          </form>
        </div>
      )}

      {rating === 5 && (
        <div className={styles.step2}>
          <h2 className={styles.title}>Step 2:</h2>
          <div className={styles.share}>
            <p className={styles.description}>
              Share This Story, Choose Your Platform!
            </p>

            <div className={styles.google_inner}>
              <Link
                href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x89c25a4c1d685b47:0xeeac31361034579b!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
                target="_blank"
              >
                <Button variant="secondary" className={styles.button_share}>
                  <div className={styles.button_google}>
                    Share
                    <FcGoogle size={20} />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
