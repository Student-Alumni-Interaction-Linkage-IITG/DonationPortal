import Invested from "../../Databases/projects.json";
import React, { useState } from "react";
import Card from "../Card";

function ShowInvestedProjects() {
  const [TechProj, setTechProj] = useState(false);
  const [CultProj, setCultProj] = useState(false);
  const [SportsProj, setSportsProj] = useState(false);

  Invested[0].map(({ data }) => {
    if(data.board === "technical")
      setTechProj(true);
    if(data.board === "cultural")
      setCultProj(true);
    if(data.board === "sports")
      setSportsProj(true);
  });

  return (
    <div className="allprojects">
      {TechProj && (
        <div className="techprojects">
          <h2>Technical Board</h2>
          <div className="techcards">
            {Invested[0] &&
              Invested[0].map(({ data }) => {
                <Card details={data} />;
              })}
          </div>
        </div>
      )}
      {CultProj && (
        <div className="cultprojects">
          <h2>Cultural Board</h2>
          <div className="cultcards">
            {Invested[0] &&
              Invested[0].map(({ data }) => {
                <Card details={data} />;

              })}
          </div>
        </div>
      )}
      {SportsProj && (
        <div className="sportsprojects">
          <h2>Sports Board</h2>
          <div className="sportscards">
            {Invested[0] &&
              Invested[0].map(({ data }) => {
                <Card details={data} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowInvestedProjects;
