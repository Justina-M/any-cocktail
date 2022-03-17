import BulletSeparator from "../ui/BulletSeparator";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";
import routes from "../../routes/routes";
import classes from "./CocktailItem.module.css";

const CocktailItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={`${props.title} cocktail`} loading="lazy" />
      </div>
      <div className={classes.info}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes.descriptionContainer}>
          <div className={classes.icon}>
            <Icon
              name={props.group === "Alcoholic" ? "alcoholic" : "non-alcoholic"}
            />
          </div>
          <p className={classes.description}>
            <span>{props.group}</span>
            <BulletSeparator />
            <span>{props.ingredientCount} ingr.</span>
          </p>
        </div>
      </div>
      <div className={classes.action}>
        <LinkButton to={`${routes.cocktails}/${props.title}`}>
          View Recipe
        </LinkButton>
      </div>
    </li>
  );
};

export default CocktailItem;
