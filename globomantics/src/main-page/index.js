import Header from "./header";
import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./main-page.css";
import FeaturedHouse from "./FeaturedHouse";
import HouseFilter from "./house-filters";
import SearchResult from "../search-results";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouse = async () => {
      const rep = await fetch("/houses.json");
      const houses = await rep.json();
      setAllHouses(houses);
    };
    fetchHouse();
  }, []);

  const featureHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world" />
      <HouseFilter allHouses={allHouses}></HouseFilter>

      <Routes>
        <Route
          path="/"
          element={<FeaturedHouse house={featureHouse}></FeaturedHouse>}
        >
          {" "}
        </Route>
        <Route
          path="/searchresults/:country"
          element={<SearchResult allHouses={allHouses} />}
        ></Route>
        <Route
          path="/house/:id"
          element={<HouseFromQuery allHouses={allHouses} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
