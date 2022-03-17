import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const IntroPage = React.lazy(() => import("./pages/IntroPage"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const SingleCocktailPage = React.lazy(() =>
  import("./pages/SingleCocktailPage")
);
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path={routes.index} element={<IntroPage />} />
          <Route path={routes.cocktails} element={<MainPage />} />
          <Route
            path={routes.singleCocktail}
            element={<SingleCocktailPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
