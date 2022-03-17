import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./cocktails-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: { cocktails: cocktailsReducer, ui: uiReducer },
});

export default store;
