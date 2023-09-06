import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const SingleMoviePage = lazy(() => import("./pages/SingleMoviePage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const CastsPage = lazy(() => import("./pages/CastsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading page</p>}>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movies"} element={<MoviesPage />} />
        <Route path={"/movies/:id"} element={<SingleMoviePage />}>
          <Route path={"reviews"} element={<ReviewsPage />} />
          <Route path={"cast"} element={<CastsPage />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
