import React, { useEffect } from "react";
import imgicon from "../assets/images/codingclubLogo.png";

function Cards(data) {
  

  return (
    <div>
      <div className="cardp2">
        <div className="iconhead">
          <div className="icon">
            <img src={imgicon} alt="" className="iconimg" />
          </div>

          <div className="card-img-one">
            <h3 className="imageTextp2two"></h3>;
            <h4 className="imagetextp2one">Campus tour Game</h4>
          </div>
        </div>
        <div className="card-img">
          <img src="" alt="" className="imagep2" />
        </div>
        <div className="card-contentp2">
          <p className="card-contentp2text">
            Campus Rush is a virtual recreation of the entire campus for
            freshers and other to roam around and experience the rush
          </p>
        </div>
        <div>
          <h4 className="heading1p2">Donation Goal</h4>
        </div>
        <div className="range-container">
          <input type="range" id="range" min="0" max="100" disabled />
          <label htmlFor="range">3 Cr</label>
        </div>

        <h2 className="headingp2">Top Donors</h2>
        <p className="textp2line0">Ritwik Ganguly - 1.2$</p>
        <p className="textp2line1">Ritwik Ganguly - 1.2$</p>
        <img className="imagep2one" src="../assets/photos/bookmarkone.png" />
        {/* <img className="imagep2two" src="../assets/bookmark-white.png" alt=""/> */}
        <button className="Buttonp2">Donate</button>
      </div>
    </div>
  );
}
export default Cards;
