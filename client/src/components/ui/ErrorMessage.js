import classes from "./ErrorMessage.module.css";
import Icon from "./Icon";

const ErrorMessage = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <Icon name="not-found" height="5" />
      </div>
      <p className={classes.message}>{props.children}</p>
    </div>
  );
};

export default ErrorMessage;
