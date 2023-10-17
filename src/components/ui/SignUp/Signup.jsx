import classNames from "classnames";

import { Button } from "..";

import styles from "./SignUp.module.scss";

export const Signup = ({ setIsActive, isActive, className }) => (
  // const [isActive, setIsActive] = useState(false);
  <Button
    variant="primary"
    onClick={() => setIsActive(true)}
    className={classNames(styles.button, className)}
  >
    Sign Up Now
  </Button>
);
