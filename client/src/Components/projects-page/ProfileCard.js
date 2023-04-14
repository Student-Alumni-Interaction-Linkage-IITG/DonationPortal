import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CreditCard from "./Credit-Card/CreditCard.js";
import ProfilePic2 from "../../assets/images/profile-card/ProfilePic2.png";
import Vector from '../../assets/images/profile-card/Vector.png';
import Vector2 from '../../assets/images/profile-card/Vector2.png';
import Vector3 from '../../assets/images/profile-card/Vector3.png';
import Vector4 from '../../assets/images/profile-card/Vector4.png';

const container = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
        duration: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    gap: 48px;
`

const ProfileDetails = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const EmailDetails = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .inline{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .inline .icon{
        height: 16px;
        width: 16px;
    }
`

const NameLine = styled(motion.div)`
    display: flex;
    flex-direction: row;
    gap: 15px;
    /* align-items: baseline; */

    .Text{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.01em;
        color: #333333;
        opacity: 0.7;
    }
`

const Name = styled.div`
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 700;
`

const Edit = styled(motion.button)`
    background-color: #F6F7F7;
    border-radius: 3px;
    border: solid 0.5px black;
    cursor: pointer;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
`

const Image = styled(motion.div)`
    border: 1px solid white;
    border-radius: 8px;
    width: 300px;
    height: 240px;
    position: relative;

    .img{
        display: block;
        width: 100%;
        height: 100%;
    }

    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.6);
        color: white;
        opacity: 0;
        transition: opacity 0.25s;
    }

    .overlay > *{
        transform: translateY(20px);
        transition: transform 0.25s;
    }

    .overlay:hover > *{
        transform: translateY(0);
    }

    .overlay:hover{
        opacity: 1;
    }

    .overlay--blur{
        backdrop-filter: blur(5px);
    }
`

const Card = styled(motion.div)`
    height: 240px;
`

const ProfileCard = () =>{
    return(
        <Profile>
            <Image
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <img src={ProfilePic2} alt="&#127183;" className="img"/>
                <div className="overlay overlay--blur">
                    <div className="Change_img">
                        <a href="#" style={{color: "white", textDecoration: "none"}}>Change Picture</a>
                    </div>
                </div>
            </Image>
            <ProfileDetails
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <NameLine className="item" variants={item} transition={{delay: 0.5}}>
                     <Name>Virushastra Budhdhe</Name>
                     <Edit
                        whileHover={{scale: 1.05}}
                     >
                        Edit Profile
                    </Edit>
                </NameLine>
                <EmailDetails className="item" variants={item} transition={{delay: 0.6}}>
                    <NameLine>
                        <div><img src={Vector} alt="" /></div>
                        <div className="Text">Faculty</div>
                    </NameLine>
                    <NameLine className="item" variants={item} transition={{delay: 0.7}}>
                        <div><img src={Vector2} alt="" /></div>
                        <div className="Text">virus@threeidiots.com</div>
                    </NameLine>
                    <NameLine className="item" variants={item} transition={{delay: 0.8}}>
                        <div><img src={Vector3} alt="" /></div>
                        <div className="Text">+91-9999999999</div>
                    </NameLine>
                    <NameLine className="item" variants={item} transition={{delay: 0.9}}>
                        <div><img src={Vector4} alt="" /></div>
                        <div className="Text">Faculty Quarters, Indian Institute of Technology, Amingaon, North Guwahati, Assam</div>
                    </NameLine>
                </EmailDetails>
            </ProfileDetails>
            <Card className="container" variants={container} initial="hidden" animate="visible">
                <CreditCard/>
            </Card>
        </Profile>
    );
}

export default ProfileCard;