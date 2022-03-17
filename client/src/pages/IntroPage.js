import Logo from "../components/ui/Logo";
import CocktailSearchForm from "../components/cocktails/CocktailSearchForm";
import classes from "./IntroPage.module.css";

const IntroPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.info}>
          <h1>Search any cocktail</h1>
          <p>
            Here you will find 1000s of various cocktails recipies! Have in mind
            some cocktail which you want to try? Just type in it's name or one
            of ingredients.
          </p>
        </div>
        <div className={classes.search}>
          <CocktailSearchForm />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
