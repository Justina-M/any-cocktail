import { createSlice } from "@reduxjs/toolkit";

const initCocktailsState = {
  list: [],
  singleCocktail: null,
  filter: "all",
};

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState: initCocktailsState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload.filter;
    },

    replaceSingleCocktail(state, action) {
      state.singleCocktail = action.payload.cocktail;
    },

    replaceCocktails(state, action) {
      state.list = action.payload.cocktails;
    },
  },
});

export const { changeFilter, replaceSingleCocktail, replaceCocktails } =
  cocktailsSlice.actions;

export default cocktailsSlice.reducer;
