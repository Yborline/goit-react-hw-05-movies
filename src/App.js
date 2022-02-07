import { lazy, Suspense } from "react";
import Spinner from "./Component/Spinner/Spinner";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

const Navigation = lazy(() => import("./Component/Navigation/Navigation"));
const MoviesOutles = lazy(() => import("./Component/Movies/Movies"));
const Reviews = lazy(() => import("./views/ReviewsView"));
const Cast = lazy(() => import("./views/CastSubView"));
const MoviesDetailsView = lazy(() => import("./views/MoviesDetailsView"));
const MoviesView = lazy(() => import("./views/MoviesView"));
const HomeView = lazy(() => import("./views/HomeView"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomeView />} />
            <Route path="movies" element={<MoviesOutles />}>
              <Route index element={<MoviesView />} />
              <Route path=":id" element={<MoviesDetailsView />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
// <Route path="*" element={<NotFoundView />} />
