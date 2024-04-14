import classNames from "classnames";
import { GoStarFill } from "react-icons/go";

import styles from "./Rating.module.scss";

export const StarButton = ({ index, rating, hover, setRating, setHover }) => (
  <button
    type="button"
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
