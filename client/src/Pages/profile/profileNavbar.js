// All classNames assigned to various elements contain "pp-" in the beginning , which stands for "profile page"

import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavProfileImg from "../../assets/images/profile-images/navprofilepic.png";
import NotifsIcon from "../../assets/images/profile-images/notifsicon.png";
import UnreadDot from "../../assets/images/profile-images/unreadnotifs.png";

const ProfileNavbar = (props) => {
  const [Unread, setUnread] = useState(false);
  const [username, setUsername] = useState("");
  // const [username2, setUsername2] = useState("");

  useEffect(() => {
    if(props) {
      setUsername(props.username);
    }
  },[props]);

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
        <img src={NotifsIcon} alt="" className="pp-notifsicon" />
        {Unread && <img src={UnreadDot} alt="" className="pp-unreadnotifs" />}
        <img src={NavProfileImg} alt="" className="pp-navprofilepic" />
        <span>{username}</span>
        <button type="button" className="pp-logoutbtn">
          LogOut
        </button>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
