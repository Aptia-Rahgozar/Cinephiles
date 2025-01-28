import { useState } from "react";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  const [searchedMovie, setSearchedMovie] = useState("");
 
  return (
    <div className="bg-color01Light dark:bg-color02">
      <Header setSearchedMovie={setSearchedMovie} />
      <AllRoutes searchedMovie={searchedMovie} />
      <Footer />
    </div>
  );
}

export default App;
