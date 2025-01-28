import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { MovieCard } from "../components/MovieCard";

export const MovieListPage = ({ api, title }) => {
  const { data: movies } = useFetch(api);

  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
