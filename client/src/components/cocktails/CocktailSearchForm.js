import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import btnClasses from "../ui/Button.module.css";
import classes from "./CocktailSearchForm.module.css";

const CocktailSearchForm = () => {
  const searchInputRef = useRef();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchWord = searchInputRef.current.value.trim();

    searchInputRef.current.value = "";

    navigate({
      pathname: routes.cocktails,
      search: `?s=${searchWord}`,
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSearch}>
      <div className={classes.searchbar}>
        <div className={classes.icon}>
          <Icon name="loupe" height="2" />
        </div>
        <input
          className={classes.input}
          type="text"
          placeholder="Search by ingredient or title"
          ref={searchInputRef}
        />
      </div>

      <Button className={btnClasses.outlinedDark} type="submit">
        Search
      </Button>
    </form>
  );
};

export default CocktailSearchForm;
