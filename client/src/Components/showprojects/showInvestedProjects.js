// import Projects from "../../Databases/projects.json";
import Projects from "../../Databases/testprojects.json";
import React, { useEffect, useState } from "react";
import Card from "../HomePage/Card/Card.js";
import "./showProjects.css";

function ShowInvested(allprojects) {
  const Projects = allprojects.projects;
  const [TechProj, setTechProj] = useState(false);
  const [CultProj, setCultProj] = useState(false);
  const [SportsProj, setSportsProj] = useState(false);

  useEffect(() => {
    Projects.map((data) => {
      if (data.board === "technical") setTechProj(true);
      if (data.board === "cultural") setCultProj(true);
      if (data.board === "sports") setSportsProj(true);
    });
  }, [Projects]);

  return (
    <div className="allprojects">
      {TechProj && (
        <div className="techprojects">
          <h1 className="techboardheading">Technical Board</h1>
          <div className="techcards">
            {Projects.map((data) => {
              if (data.board === "technical") {
                return (
                  <div className="singlecard">
                    <Card details={data} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {CultProj && (
        <div className="cultprojects">
          <h1 className="cultboardheading">Cultural Board</h1>
          <div className="cultcards">
            {Projects.map((data) => {
              if (data.board === "cultural") {
                return (
                  <div className="singlecard">
                    <Card details={data} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {SportsProj && (
        <div className="sportsprojects">
          <h1 className="sportsboardheading">Sports Board</h1>
          <div className="sportscards">
            {Projects.map((data) => {
              if (data.board === "sports") {
                return (
                  <div className="singlecard">
                    <Card details={data} />
                  </div>
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowInvested;
