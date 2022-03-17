import { RotatingLines } from "react-loader-spinner";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinner}>
      <RotatingLines width="100" strokeWidth="2" />
    </div>
  );
};

export default LoadingSpinner;
