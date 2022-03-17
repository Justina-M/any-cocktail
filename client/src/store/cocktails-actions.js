import { getCocktailsApi, getSingleCocktailApi } from "../lib/api";

import { updateStatus } from "./ui-slice";
import { replaceSingleCocktail, replaceCocktails } from "./cocktails-slice";

export const searchCocktails = (payload) => {
  return async (dispatch) => {
    dispatch(
      updateStatus({
        status: "loading",
      })
    );

    try {
      const cocktailsData = await getCocktailsApi(payload.searchWord);

      dispatch(replaceCocktails({ cocktails: cocktailsData }));

      dispatch(
        updateStatus({
          status: "success",
        })
      );
    } catch (err) {
      console.log(err);

      dispatch(
        updateStatus({
          status: "error",
          message: err.message,
        })
      );
    }
  };
};

export const getSingleCocktail = (payload) => {
  return async (dispatch) => {
    dispatch(
      updateStatus({
        status: "loading",
      })
    );

    try {
      const cocktailData = await getSingleCocktailApi(payload.title);

      dispatch(replaceSingleCocktail({ cocktail: cocktailData }));

      dispatch(
        updateStatus({
          status: "success",
        })
      );
    } catch (err) {
      console.log(err);

      dispatch(
        updateStatus({
          status: "error",
          message: err.message,
        })
      );
    }
  };
};
