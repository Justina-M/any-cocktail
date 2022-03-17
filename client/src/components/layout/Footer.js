import classes from "./Footer.module.css";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return <footer className={classes.footer}>@ {currYear} Justina B</footer>;
};

export default Footer;
