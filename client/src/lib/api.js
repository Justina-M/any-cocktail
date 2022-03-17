import routes from "../routes/routes";

export const getCocktailsApi = async (searchWord) => {
  if (!searchWord) throw new Error("Incorrect search word.");

  const response = await fetch(`${routes.api}?s=${searchWord}`);

  if (response.status !== 200)
    throw new Error(response.statusText || "Could not find cocktails.");

  const data = await response.json();

  if (!data.drinks)
    throw new Error("Could not find cocktails according to given phrase.");

  const transformedCocktails = [];

  data.drinks.forEach((drink) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      if (ingredient) ingredients.push(ingredient);
    }

    const measures = [];
    for (let i = 1; i <= 15; i++) {
      const measure = drink[`strMeasure${i}`];
      if (measure) measures.push(measure);
    }

    const cocktail = {
      id: drink.idDrink,
      title: drink.strDrink,
      group: drink.strAlcoholic,
      category: drink.strCategory,
      image: drink.strDrinkThumb,
      instructions: drink.strInstructions,
      ingredients: ingredients,
      ingredientCount: ingredients.length,
      ingredientsMeasure: measures,
    };

    transformedCocktails.push(cocktail);
  });

  return transformedCocktails;
};

// here we should get single cocktail by ID, but the API doens't have this kind of endpoint, so we get the first cocktail according to the title
export const getSingleCocktailApi = async (title) => {
  if (!title) throw new Error("No such cocktail found.");

  const response = await fetch(`${routes.api}?s=${title}`);

  if (response.status !== 200)
    throw new Error(response.statusText || "Could not find the cocktail.");

  const data = await response.json();

  if (!data.drinks) throw new Error("Could not find the cocktail.");

  const firstDrink = data.drinks[0];

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = firstDrink[`strIngredient${i}`];
    if (ingredient) ingredients.push(ingredient);
  }

  const measures = [];
  for (let i = 1; i <= 15; i++) {
    const measure = firstDrink[`strMeasure${i}`];
    if (measure) measures.push(measure);
  }

  const transformedCocktail = {
    id: firstDrink.idDrink,
    title: firstDrink.strDrink,
    group: firstDrink.strAlcoholic,
    category: firstDrink.strCategory,
    image: firstDrink.strDrinkThumb,
    instructions: firstDrink.strInstructions,
    ingredients: ingredients,
    ingredientCount: ingredients.length,
    ingredientsMeasure: measures,
  };

  return transformedCocktail;
};
