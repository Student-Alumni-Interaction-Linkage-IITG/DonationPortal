import Ongoing from "../../Databases/projects.json";
import React, { useState } from "react";
import Card from "../Card";

function ShowOngoingProjects() {
  const [TechProj, setTechProj] = useState(false);
  const [CultProj, setCultProj] = useState(false);
  const [SportsProj, setSportsProj] = useState(false);

  Ongoing[2].map(({ data }) => {
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
            {Ongoing &&
              Ongoing.map(({ data }) => {
                <Card details={data} />;
              })}
          </div>
        </div>
      )}
      {CultProj && (
        <div className="cultprojects">
          <h2>Cultural Board</h2>
          <div className="cultcards">
            {Ongoing &&
              Ongoing.map(({ data }) => {
                <Card details={data} />;
              })}
          </div>
        </div>
      )}
      {SportsProj && (
        <div className="sportsprojects">
          <h2>Sports Board</h2>
          <div className="sportscards">
            {Ongoing &&
              Ongoing.map(({ data }) => {
                <Card details={data} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowOngoingProjects;
