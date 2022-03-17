import Logo from "../ui/Logo";
import CocktailSearchForm from "../cocktails/CocktailSearchForm";
import classes from "./MainPageHeader.module.css";

const MainPageHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.slogan}>1000s of cocktails and drinks</div>
      <CocktailSearchForm />
    </header>
  );
};

export default MainPageHeader;
