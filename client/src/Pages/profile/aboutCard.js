import React, { useEffect, useState } from "react";
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

function AboutCard(props) {
  const [Uploaddp, setUploaddp] = useState(false);
  // const [BgFilter, setBgFilter] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const uploadProfilePic = () => {
    setUploaddp(true);
  };
  const [userData, setUserData] = useState({});

  const { token, user } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetch(`http://localhost:8000/api/profile/${user._id}`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "contact") {
      setContact(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/profile/${user._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, contact }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error updating user data");
        }
      })
      .then((data) => {
        setUserData(data);
        setUpdated(!updated);
        alert("Profile Updated Successfully :) ");
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
          <div className="pp-profilename">
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
              <span className="pp-mydetailtext">{userData.contact}</span>
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
          <h1 className="amount">&#8377; {userData.amountDonated}</h1>
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
            {/* <input type="file" className="pp-imginput"  accept=".jpg,.png,image/*" required placeholder="Some placeholder"/> */}
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
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={contact}
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
