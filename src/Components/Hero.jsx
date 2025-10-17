import React from "react";
import "./hero.css";
import riceImg from "../assets/rice.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${riceImg})` }}
    >
      <div className="overlay">
        <h1>
          Insects   <br></br> Problem In <br /> Your Food <br />Products?
        </h1>
        <button>CONTACT</button>
      </div>
    </section>
  );
};

export default Hero;
