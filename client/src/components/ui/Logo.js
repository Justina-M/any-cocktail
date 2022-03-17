import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <NavLink to={routes.index} className={classes.logo}>
      <LogoSvg />
    </NavLink>
  );
};

export default Logo;
