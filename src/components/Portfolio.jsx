import React from "react";
import ProjectItem from "./ProjectItem";
import deployedPapyrus from "../assets/deployedPapyrus.png";
import linguini from "../assets/linguini.png";
import mainQuizPage from "../assets/mainQuizPage.png";
import play from "../assets/play.png";
import recipeConcierge from "../assets/recipeConcierge.png";
import weatherScreenshot from "../assets/weatherScreenshot.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-violet-800">Projects</h1>
      <p className="text-center py-8">While taking a coding bootcamp through UC Berkeley and EdX, I have learned many skills. These include HTML, Css, Javascript, React, Mongo, SQL, Express, Node which have allowed me to create projects and improve my skills over time.</p>
      <section className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={linguini} title="Linguini Language Tutor App" link="https://pasta-fagioli-b817a8e5488d.herokuapp.com/" />
        <ProjectItem img={recipeConcierge} title="Recipe Finder App" link="https://athenamw.github.io/recipeConcierge/" />
        <ProjectItem img={play} title="Tic Tac Doh" link="https://github.com/Neetk962/tic-tac-doh" />
        <ProjectItem img={weatherScreenshot} title="Weather App" link="https://athenamw.github.io/tutTutLooksLikeRain/" />
        <ProjectItem img={deployedPapyrus} title="Papyrus Note Taking App" link="https://frompapyrustoelectric-ac13fce63a4c.herokuapp.com/" />
        <ProjectItem img={mainQuizPage} title="Quiz Game" link="https://athenamw.github.io/triviaTime/" />
      </section>
    </section>
  );
};

export default Portfolio;
