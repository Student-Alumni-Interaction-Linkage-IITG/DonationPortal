// All classNames assigned to various elements contain ---->  "pp-" in the beginning , which stands for "profile page"
// tb ---> technical board .
// cb ---> cultural board .

import React from "react";
import ProfileNavbar from "./profileNavbar";
import AboutCard from "./aboutCard";
import Cards from "../../Components/Card";
import ProjectsNav from "./projectsNav";
import "./myprofile.css";
import { useState } from "react";
import NoDonationImg from "../../assets/images/profile-images/nodonation.svg";

function MyProfile() {
  const [TotalAmount, setTotalAmount] = useState(0);


  
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
          <ProjectsNav />
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
      </div>
      {/* <div className='pprightbody'>

          <div className='pprightbody1'>
            <div className='projectOptions'>
              <ProjectsNav />
            </div>
          </div>
          <div className='pprightbody2'>
            
            <h2 style={{margin: 30}}>Technical Board</h2>
            <div className='pp-techprojects'>
              <Cards />
              <Cards />
              <div className='pp-cards'></div>
              <div className='pp-cards'></div> 
            </div>
            <h2 style={{margin: 30}}>Cultural Board</h2>
            <div className='pp-cultprojects'>
              <Cards className="pp-cards"/>
              <Cards className="pp-cards"/>
              <div className='pp-cards'></div>
              <div className='pp-cards'></div> 
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MyProfile;
