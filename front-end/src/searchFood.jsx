import React, { useEffect, useState } from "react";
import "./searchFood.css";

import SearchResult from "./searchResult";

function SearchNorth({ type }) {
  const [north, setNorth] = useState([]);

  useEffect(() => {
    getNorth();
  }, []);

  const getNorth = async () => {
    const response = await fetch(`http://localhost:9000/${type}`);
    const data = await response.json();
    console.log(data);
    setNorth(data);
  };
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>Available Dishes :</h1>
      </div>

      {north.map((north) => (
        <SearchResult
          img={north.img_url}
          //   location="Private room in center of London"
          title={north.Fname}
          description={north.descr}
          star={north.Frating}
          price={north.Fprice}
          //   total="£117 total"
        />
      ))}
    </div>
  );
}

export default SearchNorth;
