import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/cocktails-slice";
import classes from "./CocktailsFilter.module.css";
import Button from "../ui/Button";
import btnClasses from "../ui/Button.module.css";

const CocktailsFilter = () => {
  const { filter } = useSelector((state) => state.cocktails);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    dispatch(changeFilter({ filter: value }));
  };

  return (
    <div className={classes.container}>
      <Button
        className={filter === "all" ? btnClasses.filledDark : ""}
        value="all"
        onClick={handleChangeFilter}
      >
        All
      </Button>
      <Button
        className={filter === "Non alcoholic" ? btnClasses.filledDark : ""}
        value="Non alcoholic"
        onClick={handleChangeFilter}
      >
        Non alcoholic
      </Button>
      <Button
        className={filter === "Alcoholic" ? btnClasses.filledDark : ""}
        value="Alcoholic"
        onClick={handleChangeFilter}
      >
        Alcoholic
      </Button>
    </div>
  );
};

export default CocktailsFilter;
