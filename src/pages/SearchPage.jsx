import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { MovieCard } from "../components/MovieCard";

export const SearchPage = ({ api, searchedMovie }) => {
  const { data: movies } = useFetch(api);

  useTitle(`Search results for ${searchedMovie}`);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No results were found for "${searchedMovie}".`
            : `Resutls for "${searchedMovie}":`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
