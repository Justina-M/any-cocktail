import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import classes from "./SingleCocktail.module.css";
import btnClasses from "../ui/Button.module.css";

const SingleCocktail = () => {
  const { singleCocktail } = useSelector((state) => state.cocktails);

  const {
    title,
    group,
    category,
    instructions,
    ingredients,
    ingredientsMeasure,
    ingredientCount,
  } = singleCocktail;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.description}>
        <div className={classes.descriptionItem}>
          <Icon name="alcoholic" height="2.5" />
          <p>{group}</p>
        </div>
        <div className={classes.descriptionItem}>
          <Icon name="ingredients" height="2.5" />
          <p>{ingredientCount} ingredients</p>
        </div>
        <div className={classes.descriptionItem}>
          <Icon name="category" height="2.5" />
          <p>{category}</p>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.ingredientsWrapper}>
          <h2>Ingredients</h2>
          <div className={classes.ingredientsList}>
            <ul className={classes.measures}>
              {ingredientsMeasure.map((measure, i) => (
                <li key={i}>{measure}</li>
              ))}
            </ul>
            <ul>
              {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.instructionsWrapper}>
          <h2>Instructions</h2>
          <p>{instructions}</p>
        </div>
      </div>
      <div className={classes.actions}>
        <Button className={btnClasses.text} onClick={handleGoBack}>
          <Icon name="back" height="1.5" />
          Back to the list
        </Button>
      </div>
    </div>
  );
};

export default SingleCocktail;
