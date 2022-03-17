import { Link } from "react-router-dom";
import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
  return (
    <Link className={`${classes.link} ${props.className}`} to={props.to}>
      {props.children}
    </Link>
  );
};

export default LinkButton;
