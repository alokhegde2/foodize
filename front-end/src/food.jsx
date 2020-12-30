import React from "react";

import "./food.css";

const Food = ({ url, title, desc, price }) => {
  return (
    <div className="card">
      <img src={url} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{desc}</h4>
        <h3>₹ {price}</h3>
        <button>Add to order list</button>
      </div>
    </div>
  );
};

export default Food;
