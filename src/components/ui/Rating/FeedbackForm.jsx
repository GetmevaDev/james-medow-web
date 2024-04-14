import { Button } from "..";

import styles from "./Rating.module.scss";

export const FeedbackForm = ({ feedback, setFeedback, submitForm }) => (
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
);
