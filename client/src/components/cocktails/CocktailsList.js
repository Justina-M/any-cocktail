import { useSelector } from "react-redux";
import ErrorMessage from "../ui/ErrorMessage";
import CocktailItem from "./CocktailItem";
import classes from "./CocktailsList.module.css";

const CocktailsList = () => {
  const cocktails = useSelector((state) => {
    const { list, filter: filterBy } = state.cocktails;

    if (filterBy === "all") {
      return list;
    } else {
      return list.filter((item) => item.group === filterBy);
    }
  });

  let listContent;
  if (cocktails.length === 0) {
    listContent = (
      <ErrorMessage>No cocktails found in this category.</ErrorMessage>
    );
  } else {
    listContent = cocktails.map((item) => (
      <CocktailItem
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        group={item.group}
        ingredientCount={item.ingredientCount}
      />
    ));
  }

  return (
    <div className={classes.container}>
      <ul className={classes.list}>{listContent}</ul>
    </div>
  );
};

export default CocktailsList;
