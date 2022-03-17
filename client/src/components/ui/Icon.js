import icons from "../../assets/icons.svg";
import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <svg
      className={`${classes.icon} icon-${props.name}`}
      style={{ height: props.height ? `${props.height}rem` : "2rem" }}
    >
      <use xlinkHref={`${icons}#icon-${props.name}`}></use>
    </svg>
  );
};

export default Icon;
