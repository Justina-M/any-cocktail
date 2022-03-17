import Image404 from "../components/ui/Image404";
import LinkButton from "../components/ui/LinkButton";
import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <Image404 />
        <div className={classes.info}>
          <h1>Ooops!</h1>
          <p>It looks like we don't have anything to show here</p>
        </div>
        <div className={classes.actions}>
          <LinkButton to="/">Back to Cocktails</LinkButton>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
