// All classNames assigned to various elements contain ---->  "pp-" in the beginning , which stands for "profile page"
// tb ---> technical board .
// cb ---> cultural board .

import React, { useEffect } from "react";
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
  const [AllProjects, setAllProjects] = useState([]);
  const [Invested, setInvested] = useState(false);
  const [Bookmarked, setBookmarked] = useState(false);
  const [Ongoing, setOngoing] = useState(false);
  const [active, setActive] = useState(false);
  // const ongoing = document.getElementById('nav-ongoing');
  // const invested = document.getElementById('nav-invested');
  // const bookmarked = document.getElementById('nav-bookmarked');
  
  const handleInvested = () => {
    setInvested(true);
    setOngoing(false);
    setBookmarked(false);
    setTotalAmount(1);
  };

  const handleBookmarked = () => {

    setBookmarked(true);
    setOngoing(false);
    setInvested(false);
    setTotalAmount(1);
  };

  const handleOngoing = () => {
    setOngoing(true);
    setInvested(false);
    setBookmarked(false);
    setTotalAmount(1);
  };

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newData = data.map((projects) => {
          console.log(projects.board);
          let size = AllProjects.push(projects);
        });
        // setAllProjects(data);
      })
      .catch((err) => {
        console.log("Could Not fetch data!");
        console.log(err);
      });
  }, []);

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
              <div className="pp-navelement" id="nav-invested" onClick={() => handleInvested()}>
                Invested Projects
              </div>
              <div className="pp-navelement" id="nav-bookmarked" onClick={() => handleBookmarked()}>
                Bookmarked Projects
              </div>
              <div className="pp-navelement" id="nav-ongoing" onClick={() => handleOngoing()}>
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
        {!TotalAmount ? (
          <div className="pp-nodonation">
            <img src={NoDonationImg} alt="" />
            <div className="nodonationtext">
              Looks like you have not made any donation.
              <strong>Donate Now!</strong>
            </div>
            <button type="button" className="pp-seeAllbtn">
              See All Projects
            </button>
            {/* <div>
              {AllProjects &&
                AllProjects.map((projects) => {
                  return(
                  <div>{projects.title}</div>
                  )
                })}
            </div> */}
          </div>
        ) : (
          <>
            {AllProjects && Invested && <ShowInvested projects={AllProjects} />}
          </>
        )}

        {AllProjects && Bookmarked && <ShowBookmarked projects={AllProjects} />}
        {AllProjects && Ongoing && <ShowOngoing projects={AllProjects} />}
      </div>
    </div>
  );
}

export default MyProfile;
