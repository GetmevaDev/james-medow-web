import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoStarFill } from "react-icons/go";
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
        Thank you for visiting Dentist On Madison, please take a moment to leave
        feedback.
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

            <Link
              href="https://www.google.com/search?q=traffic+ticket+lawyer+james+medows+esq&sca_esv=598771579&hl=ru-RU&gl=ru&sxsrf=ACQVn0-UvN1KYcEMUGHlM9TldiWDW60jNw%3A1705403636243&ei=9GSmZZvADoyvwPAPqPO32A0&udm=&ved=0ahUKEwibir_P4-GDAxWMFxAIHaj5DdsQ4dUDCBA&uact=5&oq=traffic+ticket+lawyer+james+medows+esq&gs_lp=Egxnd3Mtd2l6LXNlcnAiJnRyYWZmaWMgdGlja2V0IGxhd3llciBqYW1lcyBtZWRvd3MgZXNxMgQQIxgnSJgVUJQCWN0TcAR4AJABAJgBmgGgAe8FqgEDMy40uAEDyAEA-AEBwgIHECMYsAMYJ-IDBBgBIEGIBgGQBgE&sclient=gws-wiz-serp#lrd=0x89c25a4c1d685b47:0xeeac31361034579b,3,,,,"
              target="_blank"
            >
              <FcGoogle size={30} className={styles.google} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
