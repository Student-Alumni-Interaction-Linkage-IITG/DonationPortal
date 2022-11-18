import React from "react";
import ProfilePic from '../../assets/images/profile-images/profilePic.png';
import PersonIcon from '../../assets/images/profile-images/profileicon.png';
import MailIcon from '../../assets/images/profile-images/Mailicon.png';
import PhoneIcon from '../../assets/images/profile-images/phoneicon.png';
import HomeIcon from '../../assets/images/profile-images/homeicon.png';

function AboutCard() {
    return (
        <div className="pp-aboutCard">
            {/* <div className="aboutcard-img">
            </div> */}
            <img src={ProfilePic} alt="" className="pp-profilePic" />
            <div className="aboutdata">
                <h2 style={{ fontWeight: 900 }}>Virushastra Budhdhe</h2>
                <div style={{ marginTop: 32}}>
                    <img src={PersonIcon} alt='' class='cardicons'/>
                    Faculty
                </div>
                <div style={{ marginTop: 18 }}>
                    <img src={PhoneIcon} alt='' class='cardicons'/>
                    +91-9999999999
                </div>
                <div style={{ marginTop: 18 }}>
                    <img src={MailIcon} alt='' class='cardicons'/>

                    virus@threeidiots.com
                </div>
                <div style={{ marginTop: 18 }}>
                    <img src={HomeIcon} alt='' class='cardicons'/>

                    Faculty Quarters, Indian Institute of Technology, Amingaon, North Guwahati, Assam.
                </div>
            </div>
            <button type="button" className="aboutCardbtn">
                <p>Total Investment</p>
                <h1>₹ 10,00,000</h1>
            </button>

        </div>
    )
}

export default AboutCard