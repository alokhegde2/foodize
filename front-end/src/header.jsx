import React from "react";
import logo from "./logo.png";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useHistory } from "react-router-dom";

import "./header.css";

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <a href="">
        <img
          className="header__icon"
          src={logo}
          alt=""
          onClick={() => history.push("/")}
          variant="outlined"
        />
      </a>

      <div className="header__center">
        <button onClick={() => history.push("/search")} variant="outlined">
          Search dishes
        </button>
      </div>

      <div className="header__right">
        <button onClick={() => history.push("/member")}>Become a member</button>
        <AssignmentIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
