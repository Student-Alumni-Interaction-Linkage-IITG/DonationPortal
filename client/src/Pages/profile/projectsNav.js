import React, { useState } from "react";
import AllInvested from "../../Components/showprojects/showInvestedProjects.js";

function ProjectsNav() {

    const [invested, setInvested] = useState(false);
    const [Bookmarked, setBookmarked] = useState(false);
    const [Ongoing, setOngoing] = useState(false);

  return (
    <div>
      <div className="pp-projectnav">
        <div className="pp-projectnav1">
          <div className="pp-navelement" onClick={() => setInvested(true)}>Invested Projects</div>
          <div className="pp-navelement" onClick={() => setBookmarked(true)}>Bookmarked Projects</div>
          <div className="pp-navelement" onClick={() => setOngoing(true)}>Ongoing Projects</div>
          <div className="pp-navelement">Recommended Projects</div>
        </div>
        <div id="pp-projectnav2">
          <div className="pp-navelement filter">
            <img src={FilterIcon} alt="" style={{ padding: 5 }} />
            Filter
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsNav;
