// All classNames assigned to various elements contain "pp-" in the beginning , which stands for "profile page"

import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavProfileImg from "../../assets/images/profile-images/navprofilepic.png";
import NotifsIcon from "../../assets/images/profile-images/notifsicon.png";
import UnreadDot from "../../assets/images/profile-images/unreadnotifs.png";

const ProfileNavbar = () => {
  // const id = props.userId;
  const [Unread, setUnread] = useState(true);
  const [userData, setUserData] = useState({});
  
  const { token, user } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetch(`http://localhost:8000/api/profile/${user._id}`, {
      method: "GET"
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });
  },[])

  return (
    <nav className="pp-Navbar">
      <div className="pp-Navbarlinks">
        <div className="ppLinks">
          <Link to="/" style={{ textDecoration: "none", color: "#333333" }}>
            Projects and Events
          </Link>
        </div>
        <div className="ppLinks">
          <Link to="#" style={{ textDecoration: "none", color: "#333333" }}>
            How to Donate
          </Link>
        </div>
        <div className="ppLinks">
          <Link to="#" style={{ textDecoration: "none", color: "#333333" }}>
            Donors’ Report
          </Link>
        </div>
        {/* <div className="ppLinks">
          <Link to="#" style={{ textDecoration: "none", color: "#333333" }}>
            My Profile
          </Link>
        </div> */}
      </div>
      <div className="ppNavbar-me">
        <img src={NotifsIcon} alt="" className="pp-notifsicon"/>
        {Unread && <img src={UnreadDot} alt="" className="pp-unreadnotifs" />}
        <img src={NavProfileImg} alt="" className="pp-navprofilepic" />
        <span>{userData.name}</span>
        <button type="button" className="pp-logoutbtn">
          LogOut
        </button>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
