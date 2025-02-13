import React from "react";
import heroImg from "./assets/hero.svg";
import "./App.css";
import { Header } from "./components/headers/header";
import { Service } from "./components/service/service";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // function increment() {
  //   setCount(count + 1);
  // }

  return (
    <>
      <Header />;
      <section className="hero">
        <div className="container">
          <div className="hero__block">
            <div className="hero__info">
              <h2 className="hero__title">
                Bring everyone together to build better products.
              </h2>
              <p className="hero__text">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button className="hero__btn">Get started</button>
            </div>
            <img src={heroImg} alt="image" className="hero__img" />
          </div>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <Service
            number={"01"}
            title={`Track company-wide progress`}
            text={`See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`}
          />
        </div>
      </section>
    </>
  );
}

export default App;
