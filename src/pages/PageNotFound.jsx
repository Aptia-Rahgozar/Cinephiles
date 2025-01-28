import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Button } from "../components/Button";
import PageNotFoundImage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-8">
          <p className="text-7xl text-gray-700 dark:text-white font-bold mb-14 text-center">
            404 - Page Not Found!
          </p>
          <img
            className="rounded max-w-2xl"
            src={PageNotFoundImage}
            alt="404 Page Not Found"
          />
        </div>
        <div className="flex justify-center mb-10">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
