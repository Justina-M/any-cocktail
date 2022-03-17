import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleCocktail } from "../store/cocktails-actions";
import { updateStatus } from "../store/ui-slice";
import SinglePageHeader from "../components/layout/SinglePageHeader";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import SingleCocktail from "../components/cocktails/SingleCocktail";
import Footer from "../components/layout/Footer";

const SingleCocktailPage = () => {
  const { cocktailTitle } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    // here we should get single cocktail by ID, but the API doens't have this kind of endpoint, so we get the first cocktail according to the title
    dispatch(getSingleCocktail({ title: cocktailTitle }));

    return () => {
      dispatch(
        updateStatus({
          status: "loading",
        })
      );
    };
  }, [dispatch, cocktailTitle]);

  const { status, message } = useSelector((state) => state.ui);

  return (
    <Fragment>
      {(status === "error" || status === "success") && <SinglePageHeader />}
      <main>
        {status === "error" && <ErrorMessage>{message}</ErrorMessage>}
        {status === "loading" && <LoadingSpinner />}
        {status === "success" && <SingleCocktail />}
      </main>
      <Footer />
    </Fragment>
  );
};

export default SingleCocktailPage;
