import React from "react";
import { useState } from "react";
import Portfolio from "../components/portfolio/Portfolio";
import Snake1 from "./games/snakegame/Snake1";
import "../components/swipper.css";
import { GiSnake } from "react-icons/gi";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Swiper = () => {
  const [active, setActive] = useState("Portfolio");

  const name = active === "Portfolio" ? "Wanna See My Works" : "Let,s Play";
  const What = active === "Portfolio" ? "Porjects" : "Snake Game";

  return (
    <section id="swiper" className='swiperr'>
      <h5 id="id1">{name}</h5>
      <h2>
        <a href="#portfolio">&lt;{What}&#47;&gt;</a>
      </h2>
      <div className="pagination">
        <button
          className="btn btn-primary ctaa-snake"
          onClick={() => {
            setActive("snakegame");
          }}
        >
          <span className="tooltiptext">Snake Game</span>
          <GiSnake />
        </button>

        <button
          className="btn btn-primary cta-back"
          onClick={() => {
            setActive("Portfolio")
            
            ;
          }}
        >
          <span className="tooltiptext">Snake Game</span>
          <IoArrowBackCircleSharp />
        </button>
      </div>

      {active === "Portfolio" && <Portfolio />}
      {active === "snakegame" && <Snake1 />}
    </section>
  );
};

export default Swiper;
