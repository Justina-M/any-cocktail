import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchCocktails } from "../store/cocktails-actions";
import { updateStatus } from "../store/ui-slice";
import MainPageHeader from "../components/layout/MainPageHeader";
import CocktailsFilter from "../components/cocktails/CocktailsFilter";
import CocktailsList from "../components/cocktails/CocktailsList";
import classes from "./MainPage.module.css";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import Footer from "../components/layout/Footer";

const MainPage = () => {
  const { status, message } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const searchWord = searchParams.get("s");

  useEffect(() => {
    if (searchWord !== null) {
      dispatch(searchCocktails({ searchWord: searchWord }));
    }

    return () => {
      dispatch(
        updateStatus({
          status: "loading",
        })
      );
    };
  }, [dispatch, searchWord]);

  return (
    <Fragment>
      <MainPageHeader />
      <main>
        {status === "success" && <CocktailsFilter />}
        {status === "success" && (
          <p className={classes.resultText}>
            Search results for{" "}
            <span className={classes.searchWord}>{searchWord}</span>
          </p>
        )}
        {status === "loading" && <LoadingSpinner />}
        {status === "error" && <ErrorMessage>{message}</ErrorMessage>}
        {status === "success" && <CocktailsList />}
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainPage;
