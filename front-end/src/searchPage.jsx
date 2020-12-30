import React from "react";
import "./searchPage.css";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

function SearchPage() {
  const history = useHistory();
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>5 varients · 5 to 10 min serving time · </p>
        <h1>Types of Dishes</h1>
        <Button variant="outlined" onClick={() => history.push("/north")}>
          North Indian
        </Button>
        <Button variant="outlined" onClick={() => history.push("/south")}>
          South Indian
        </Button>
        <Button variant="outlined" onClick={() => history.push("/soft")}>
          Soft Drinks
        </Button>
        <Button variant="outlined" onClick={() => history.push("/chinese")}>
          Chinees
        </Button>
        <Button variant="outlined" onClick={() => history.push("/fast")}>
          Fast Food
        </Button>
      </div>
    </div>
  );
}

export default SearchPage;
