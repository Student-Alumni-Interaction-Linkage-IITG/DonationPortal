// All classNames assigned to various elements contain ---->  "pp-" in the beginning , which stands for "profile page"
// tb ---> technical board .
// cb ---> cultural board .

import React from "react";
import ProfileNavbar from "./profileNavbar";
import AboutCard from "./aboutCard";
import Cards from "../../Components/Card";
// import ProjectsNav from "./projectsNav";
import "./myprofile.css";
import { useState } from "react";
import NoDonationImg from "../../assets/images/profile-images/nodonation.svg";
import FilterIcon from "../../assets/images/profile-images/filtericon.png";
import ShowInvested from "../../Components/showprojects/showInvestedProjects";
import ShowBookmarked from "../../Components/showprojects/showInvestedProjects";
import ShowOngoing from "../../Components/showprojects/showInvestedProjects";

function MyProfile() {
  const [TotalAmount, setTotalAmount] = useState(0);
  const [Invested, setInvested] = useState(false);
  const [Bookmarked, setBookmarked] = useState(false);
  const [Ongoing, setOngoing] = useState(false);

  const handleInvested = () => {
    setInvested(true);
  };

  const handleBookmarked = () => {
    setBookmarked(true);
  };

  const handleOngoing = () => {
    setOngoing(true);
  };

  return (
    <div className="myProfile" id="myProfile">
      <div className="pp-header">
        <ProfileNavbar />
      </div>
      <div className="ppbody">
        <div className="ppabout">
          <AboutCard />
        </div>
      </div>

      <div className="pp-projectsbody">
        <div className="projectOptions">
          {/* <ProjectsNav /> */}
          <div className="pp-projectnav">
            <div className="pp-projectnav1">
              <div className="pp-navelement" onClick={() => handleInvested()}>
                Invested Projects
              </div>
              <div className="pp-navelement" onClick={() => handleBookmarked()}>
                Bookmarked Projects
              </div>
              <div className="pp-navelement" onClick={() => handleOngoing()}>
                Ongoing Projects
              </div>
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
        {!TotalAmount && (
          <div className="pp-nodonation">
            <img src={NoDonationImg} alt="" />
            <div className="nodonationtext">
              Looks like you have not made any donation.
              <strong>Donate Now!</strong>
            </div>
            <button type="button" className="pp-seeAllbtn">
              See All Projects
            </button>
          </div>
        )}
        {Invested &&
          Invested[0].map(({ data }) => {
            // <Cards details={data} />;
            <ShowInvested details={data} />
          })}
        {Bookmarked &&
          Invested[1].map(({ data }) => {
            // <Cards details={data} />;
            <ShowBookmarked details={data} />
          })}
        {Ongoing &&
          Invested[2].map(({ data }) => {
            // <Cards details={data} />;
            <ShowOngoing details={data} />
          })}
      </div>
    </div>
  );
}

export default MyProfile;
