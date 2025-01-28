import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-color02Light border-t shadow dark:bg-color01">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link to="/" className="hover:underline">
            Cinephiles™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0">
          <li>
            <a
              href="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
