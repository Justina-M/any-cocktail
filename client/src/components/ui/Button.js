import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${
        props.className ? props.className : classes.outlinedLight
      }`}
      type={props.type ? props.type : "button"}
      value={props.value}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
