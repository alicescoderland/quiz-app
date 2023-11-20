import classNames from "classnames";
import buttonStyles from "../button/Button.module.css";

function Button({ children, className, onClick }) {
  return (
    <button
      className={classNames(buttonStyles.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
