import { Routes, Route } from "react-router-dom";
import {
  MovieListPage,
  MovieDetailPage,
  SearchPage,
  PageNotFound,
} from "../pages";

export const AllRoutes = ({ searchedMovie }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<MovieListPage api="movie/now_playing?" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetailPage />} />
        <Route
          path="movies/top"
          element={<MovieListPage api="movie/top_rated?" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieListPage api="movie/upcoming?" title="Upcoming" />}
        />
        <Route
          path="search/:movie"
          element={
            <SearchPage
              api={`search/movie?query=${searchedMovie}&include_adult=false&`}
              searchedMovie={searchedMovie}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
