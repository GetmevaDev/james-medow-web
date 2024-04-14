import { useState } from "react";
import { toast } from "react-toastify";

import { FeedbackForm } from "./FeedbackForm";
import { ShareSection } from "./ShareSection";
import { StarButton } from "./StarButton";

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
            <StarButton
              key={index}
              index={index}
              rating={rating}
              hover={hover}
              setRating={setRating}
              setHover={setHover}
            />
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
          <FeedbackForm
            feedback={feedback}
            setFeedback={setFeedback}
            submitForm={submitForm}
          />
        </div>
      )}

      {rating === 5 && <ShareSection />}
    </div>
  );
};
