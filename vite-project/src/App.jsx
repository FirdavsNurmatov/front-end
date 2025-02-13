import React from "react";
import heroImg from "./assets/hero.svg";
import "./App.css";
import { Header } from "./components/headers/header";
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
            <div>
              <h2 className="hero__title">
                Bring everyone together to build better products.
              </h2>
              <p className="hero__text">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button className="hero__btn">Get started</button>
            </div>
            <img src={heroImg} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
