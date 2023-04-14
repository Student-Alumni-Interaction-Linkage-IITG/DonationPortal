import "./card.css";
import { useState, useEffect, Link } from "react";
import card from "../../../assets/Home/card.png";
import logo from "../../../assets/Home/logo.png";
import arrow from "../../../assets/Home/arrow.png";
import save from "../../../assets/Home/save.png";
import share from "../../../assets/Home/share.png";
import fa from "../../../assets/Home/fa.png";
import insta from "../../../assets/Home/in.png";
import tw from "../../../assets/Home/tw.png";
import yt from "../../../assets/Home/yt.png";
import Cross from "../../../assets/images/profile-images/Cross.png";

const Card = ({props:card}) => {
  const data = card
  console.log(data)
  const [value, setValue] = useState(100);
  const [Share, setShare] = useState(false);
  const handleShare = () => {
    setShare(true);
  };
  const project = data;

  useEffect(() => {}, [Share]);
  const image = project.imgs
  console.log(project.imgs)
  // if (project != undefined) console.log(project.title);
  var amount = project.Goal_Amt
  if(amount>1000 && amount < 100000){
    amount=amount/1000;
    amount+='K';
  }else{
    if(amount>100000){
      amount=amount/100000;
      amount+=' Lks';
    }else{
      amount=amount/10000000;
      amount+=' Crs';  
    }  
  }
  return (
    <div className="home-card">
        <>
          <div className="home-proj-abt">
            <div className="home-club-info">
              <div className="home-club-logo">
                <img src={logo} alt="" />
              </div>
              <div className="home-club-desc">
                <div className="home-proj-name">{project.name}</div>
                <div className="home-proj-desc">{project.Subtitle}</div>
              </div>
            </div>
            <div className="home-arrow">
              <img src={arrow} alt=""/>
            </div>
          </div>
          <div className="card-img">
            {/* <Link to={`/projectdetail.js/${project.id}`}> */}
              <img src={image} alt=""  width={"396.33px"}  height={"200px"}  />
            {/* </Link> */}
          </div>
          <div className="home-card-desc">
            {/* <Link to={`/projectdetail.js/${project.id}`}> */}
                {/* Campus Rush is a virtual recreation of the entire campus for
                freshers and other to roam around and experience the rush */}
                {project.desc}
            {/* </Link> */}
          </div>
          <div className="home-goal">Donation Goal</div>
          <div className="home-slider-cont">
            <label htmlFor="slider">0</label>
            <input
              type="range"
              // onChange={changeValue}
              min={1}
              max={project.Goal_Amt}
              step={1}
              value={project.Collected_Amt}
              className="home-slider"
              id="slider"
              disabled
            ></input>
            <label htmlFor="slider">{amount}</label>
          </div>
          <div className="home-card-btns">
            <div className="home-card-icons">
              <div>
                <img src={save} alt="" style={{ width: 14, height: 18 }} />
              </div>
              <div onClick={() => handleShare()}>
                <img src={share} alt="" style={{ width: 18, height: 19.92 }} />
              </div>
            </div>
            <div className="home-card-donate">
              <div>Donate</div>
            </div>
          </div>
        </>

      {Share && (
        <>
          <div className="sharemaskdiv"></div>
          <div className="sharecard">
            <div className="sharetitle">
              <h2>Share</h2>
              <img
                src={Cross}
                alt=""
                className="sharecross"
                onClick={() => setShare(false)}
              />
            </div>
            <div className="shareicons">
              <a href="https://m.facebook.com/100063674245618/" target="_blank">
                <img src={fa} />
              </a>
              <a
                href="https://instagram.com/sail_iitg?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img src={insta} />
              </a>
              <a href="https://twitter.com/sail_iitg" target="_blank">
                <img src={tw} />
              </a>
              <a
                href="https://www.youtube.com/c/IITGuwahatiSAIL"
                target="_blank"
              >
                <img src={yt} />
              </a>
            </div>
            <div className="sharelink">
              <h2>Or Copy link</h2>
              <div className="sharelinkbox">
                <p>
                https://www.behance.net/kumarswapnil
                </p>
                <h3 className="sharelinkcopy">Copy</h3>
              </div>

            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
