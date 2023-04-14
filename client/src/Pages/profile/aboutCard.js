import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./verify.css";
import "./updateprofile.css";
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
import VerifyIcon from "../../assets/images/profile-card/VerifyMobIcon.png";

const container = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
      duration: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;

const ProfileDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const EmailDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .inline .icon {
    height: 16px;
    width: 16px;
  }
`;

const NameLine = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  /* align-items: baseline; */

  .Text {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #333333;
    opacity: 0.7;
  }
`;

const Name = styled.div`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
`;

const Edit = styled(motion.button)`
  background-color: #f6f7f7;
  border-radius: 3px;
  border: solid 0.5px black;
  cursor: pointer;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const Image = styled(motion.div)`
  border: 1px solid white;
  border-radius: 8px;
  width: 300px;
  height: 240px;
  position: relative;

  .img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    opacity: 0;
    transition: opacity 0.25s;
  }

  .overlay > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }

  .overlay:hover > * {
    transform: translateY(0);
  }

  .overlay:hover {
    opacity: 1;
  }

  .overlay--blur {
    backdrop-filter: blur(5px);
  }
`;

const Card = styled(motion.div)`
  height: 240px;
`;

function AboutCard(props) {
  const [Uploaddp, setUploaddp] = useState(false);
  // const [BgFilter, setBgFilter] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [formData, setFormData] = useState({});

  const uploadProfilePic = () => {
    setUploaddp(true);
  };
  const [userData, setUserData] = useState({});

  const { token, user } = JSON.parse(localStorage.getItem("user"));
  // const [update, setUpdate] = useState(0);

  useEffect(() => {
    if (props) {
      setUserData(props.userData);
      // console.log(userData);
    }

  });

  useEffect(() => {
    if (props) {
      setFormData({
        name: userData.name,
        email: userData.email,
        rollno: userData.rollno,
        phone: userData.phone,
        batch: userData.batch,
        dept: userData.dept,
        address: userData.address
      });
    }
  },[props]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/profile/${user._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error updating user data");
        }
      })
      .then((data) => {
        // console.log(data.data);
        const updatedData = {
          token: token,
          user: data.data
        };
        console.log(updatedData);
        localStorage.setItem('user', JSON.stringify(updatedData));
        setUpdated(!updated);
        alert("Profile Updated Successfully :) \n Please Refresh page to see updated profile !!");
      })
      .catch((error) => {
        console.log(error.message);
      });
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
          <div className="pp-profilename item">
            <h2 style={{ fontWeight: 900 }}>{userData.name}</h2>
            <button
              className="pp-editprofile"
              onClick={() => {
                setUpdateProfile(!updateProfile);
              }}
            >
              Edit Profile
            </button>
          </div>
          <div className="pp-mydetails">
            <div style={{ marginTop: "2vw" }}>
              <img src={PersonIcon} alt="" className="cardicons" />
              <span className="pp-mydetailtext">{userData.designation}</span>
            </div>
            <div style={{ marginTop: "1.2vw" }}>
              <img src={PhoneIcon} alt="" className="cardicons" />
              <span className="pp-mydetailtext">{userData.phone}</span>
              {!isPhoneVerified && (
                <span
                  className="pp-mydetailverify"
                  onClick={() => setVerifyPhone(true)}
                >
                  Verify
                </span>
              )}
            </div>
            <div style={{ marginTop: "1.2vw" }}>
              <img src={MailIcon} alt="" className="cardicons" />
              <span className="pp-mydetailtext">{userData.email}</span>
              {!isEmailVerified && (
                <span
                  className="pp-mydetailverify"
                  onClick={() => setVerifyEmail(true)}
                >
                  Verify
                </span>
              )}
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
          <h1 className="amount">&#8377; {userData.amountInvested}</h1>
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
              <form>
                <input type="file" className="pp-dpinfield" required />
              </form>
              <span>
                Drop your image here, or <span>browse</span>
              </span>
            </div>
            <input type="file" className="pp-imginput"  accept=".jpg,.png,image/*" required placeholder="Some placeholder"/>
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
      {verifyPhone && (
        <>
          <div className="pp-verifym"></div>
          <div className="pp-verifymob">
            <img src={VerifyIcon} alt="" className="verifymobicon" />
            <h2 className="pp-otpsent">OTP Sent</h2>
            <p className="pp-otppara">
              A verification code has been sent to your{" "}
              <strong>Mobile no. 99*******6</strong>
            </p>
            <div className="pp-optcontainer">
              <input className="pp-otpinputfield" type="number" maxLength="1" />
              <input className="pp-otpinputfield" type="number" maxLength="1" />
              <input className="pp-otpinputfield" type="number" maxLength="1" />
              <input className="pp-otpinputfield" type="number" maxLength="1" />
            </div>
            <div className="pp-otptimeout">00:30</div>
            <div>
              <span className="pp-optnr">Did not receive OTP ? </span>
              <span className="pp-resendotp" onClick={() => {}}>
                Resend OTP
              </span>
            </div>
            <button
              className="pp-otpverify"
              onClick={() => {
                setIsPhoneVerified(true);
                setVerifyPhone(!verifyPhone);
              }}
            >
              Verify
            </button>
          </div>
        </>
      )}
      {verifyEmail && (
        <>
          <div className="pp-verifye"></div>
          <div className="pp-verifyemail">
            <img src={VerifyIcon} alt="" className="verifymobicon" />
            <h2 className="pp-emailsent">Email Sent</h2>
            <p className="pp-emailpara">
              Please click the link sent on{" "}
              <strong>ra********ar@gmail.com</strong> to verify.
            </p>
            <button
              className="pp-gotemail"
              onClick={() => {
                setIsEmailVerified(true);
                setVerifyEmail(!verifyEmail);
              }}
            >
              Got It!
            </button>
            <div className="pp-resendmail">Resend Verification Email</div>
          </div>
        </>
      )}
      {updateProfile && !updated && (
        <>
          <div className="pp-updatepr1"></div>
          <div className="pp-updatepr2">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="dept">Department : </label>
                <input
                  type="text"
                  id="dept"
                  name="dept"
                  value={formData.dept}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address">Address : </label>
                <input
                  type="tel"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="rollno">rollno:</label>
                <input
                  type="tel"
                  id="rollno"
                  name="rollno"
                  value={formData.rollno}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="batch">Batch : </label>
                <input
                  type="tel"
                  id="batch"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Update</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutCard;
