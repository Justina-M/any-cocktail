import { useSelector } from "react-redux";
import classes from "./SinglePageHeader.module.css";
import Logo from "../ui/Logo";
import fallbackImg from "../../assets/fallback.jpg";

const SinglePageHeader = () => {
  const { singleCocktail } = useSelector((state) => state.cocktails);

  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <img
          src={singleCocktail?.image || fallbackImg}
          alt={`Cocktail ${singleCocktail?.name || ""}`}
        />
      </div>
      <div className={classes.logo}>
        <Logo />
      </div>
    </header>
  );
};

export default SinglePageHeader;
