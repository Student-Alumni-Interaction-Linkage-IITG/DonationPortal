import React, { useState } from "react";
import ProfilePic from "../../assets/images/profile-images/profilepic.svg";
import PersonIcon from "../../assets/images/profile-images/profileicon.svg";
import MailIcon from "../../assets/images/profile-images/Mailicon.svg";
import PhoneIcon from "../../assets/images/profile-images/phoneicon.svg";
import HomeIcon from "../../assets/images/profile-images/homeicon.svg";
import Cross from "../../assets/images/profile-images/Cross.png";
import UploadpicBG from "../../assets/images/profile-images/uploadpicbg.png";
import AmountCard from "../../assets/images/profile-images/Test1.png";
import SVIPBadge from "../../assets/images/profile-card/SVIPBadge.png";
import SVIPLine from "../../assets/images/profile-card/SVIPLine.png";

function AboutCard() {
  const [Uploaddp, setUploaddp] = useState(false);
  // const [BgFilter, setBgFilter] = useState(false);
  const uploadProfilePic = () => {
    setUploaddp(true);
  };

  return (
    <div>
      <div className="pp-aboutCard" id="pp-aboutCard">
        <div className="pp-profilepic">
          <img src={ProfilePic} alt="" className="pp-profilePic" />
          <div
            className="pp-profilecamicon"
            onClick={() => uploadProfilePic()}
          />
        </div>
        <div className="aboutdata">
          <div className="pp-profilename">
            <h2 style={{ fontWeight: 900 }}>Virushastra Budhdhe</h2>
            <button className="pp-editprofile">Edit Profile</button>
          </div>
          <div className="pp-mydetails">
            <div style={{ marginTop: "2vw" }}>
              <img src={PersonIcon} alt="" className="cardicons" />
              <span className="pp-mydetailtext">Faculty</span>
            </div>
            <div style={{ marginTop: "1.2vw" }}>
              <img src={PhoneIcon} alt="" className="cardicons" />
              <span className="pp-mydetailtext">+91-9999999999</span>
            </div>
            <div style={{ marginTop: "1.2vw" }}>
              <img src={MailIcon} alt="" className="cardicons" />
              <span className="pp-mydetailtext">virus@threeidiots.com</span>
            </div>
            <div style={{ marginTop: "1.2vw", width: "19vw" }}>
              <img src={HomeIcon} alt="" className="cardicons" />
              <span className="pp-mydetailtext">
                Faculty Quarters, Indian
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Institute of
                Technology, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amingaon,
                North Guwahati, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assam.
              </span>
            </div>
          </div>
        </div>

        <div className="amountdetailscard">
          <img src={AmountCard} alt="" className="VIPCard" />
          <h1 className="amount">&#8377; 000</h1>
          <div className="amountpara">Total Investment</div>
          <img src={SVIPLine} alt="" className="svipline" />
          <img src={SVIPBadge} alt="" className="svipbadge" />
          <div className="badgepara">Donate to unlock your badge</div>
        </div>
      </div>
      <div className="borderline" />
      {Uploaddp && (
        <>
          <div className="pp-uploadmaindiv"></div>
          <div className="pp-uploaddp">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h2 className="pp-uploaddpheading">Upload Profile Picture</h2>
              <img
                src={Cross}
                alt=""
                className="pp-cross"
                onClick={() => setUploaddp(false)}
              />
            </div>
            <div className="pp-uploaddpline" />
            <div className="pp-imginput">
              <img src={UploadpicBG} alt="" className="pp-uploadpicbg" />
              <span>
                Drop your image here, or <span>browse</span>
              </span>
              {/* <input type="image"></input> */}
            </div>
            <div className="pp-uploaddpbtns">
              <button type="submit" className="pp-uploaddpbtn">
                UPLOAD
              </button>
              <button
                type="button"
                className="pp-canceldpbtn"
                onClick={() => setUploaddp(false)}
              >
                CANCEL
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutCard;
