import React from "react";
import "./home.css";
import Banner from "./banner";
import Food from "./food";
import { useEffect, useState } from "react";

function Home() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await fetch("http://localhost:9000/food");
    const data = await response.json();
    console.log(data);
    setFood(data);
  };
  return (
    <div className="home">
      <Banner className="banner" />

      <div className="home__section">
        <h3>All available dishes : </h3>
        <div className="App-card">
          {food.map((food) => (
            <Food
              url={food.img_url}
              title={food.Fname}
              desc={food.descr}
              price={food.Fprice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
