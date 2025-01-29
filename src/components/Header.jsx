import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = ({ setSearchedMovie }) => {
  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const activeClass =
    "block py-2 px-3 text-color02 bg-orange-500 rounded md:bg-transparent md:text-orange-600 md:p-0 md:dark:text-orange-600";

  const inActiveClass =
    "block py-2 px-3 text-gray-700 rounded hover:bg-gray-400 hover:text-orange-600 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-orange-600 md:dark:hover:bg-transparent dark:border-gray-700";

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    setSearchedMovie(queryTerm);
    return navigate(`/search/${queryTerm}`);
  };

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 dark:bg-color01">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Ceinephiles Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700 dark:text-white">
              Cinephiles
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none  rounded-lg text-sm p-2.5 me-1"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="search-navbar"
                  name="search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              hidden ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="search-navbar"
                  name="search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-color01 md:dark:bg-color01 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies/top"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/upcoming"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
