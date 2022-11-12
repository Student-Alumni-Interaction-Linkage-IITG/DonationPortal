import React from "react";
import FilterIcon from './profile-images/filtericon.png';

function ProjectsNav() {
    return (
        <div>
            <div className="pp-projectnav">
                <div className="pp-projectnav1">
                    <div className="pp-navelement">
                        Invested Projects
                    </div>
                    <div className="pp-navelement">
                        Bookmarked Projects
                    </div>
                    <div className="pp-navelement">
                        Recommended Projects
                    </div>
                </div>
                <div id="pp-projectnav2">
                    <div className="pp-navelement filter">
                    <img src={FilterIcon} alt='' style={{padding: 5}}/>
                        Filter
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectsNav