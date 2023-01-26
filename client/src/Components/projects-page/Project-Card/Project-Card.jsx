//Here class names are in the form of {pc_classname} to avoid clash

import React from "react";
import  "./Project-Card.css";
import imgsmall from "../../../assets/images/projects-page/Mask.png";
import imgicon from "../../../assets/images/projects-page/codingclubLogo.png";
import imgbig from "../../../assets/images/projects-page/Campus.png";
import bookmark from "../../../assets/images/projects-page/bookmark-white.png";
import share from "../../../assets/images/projects-page/share.png";
import Slider  from "@mui/material/Slider";
import { motion, spring } from "framer-motion";

function valuetext(value) {
   return `${value}°C`;
 }
function Cardone()
{
    return(
        <motion.div className="pc_event-card"
            whileHover={{scale: 1.01}} 
            transition={{type: spring}}
        >
          <div className="pc_card-head">
             <div className="pc_main-content">
             <div> <img className="pc_top-icon"  src={imgicon}/></div> 
             <div className="pc_heading" >
                <h1 className="pc_long-head">Campus Rush</h1>
                <h3 className="pc_short-head">Campus Tour Game</h3>
             </div>
             </div>
         <div><div className="pc_arrow" ><img className="pc_arrow" src={imgsmall} style={{cursor: "pointer"}} /></div></div>
          </div>  
         <div>
            <img src={imgbig} />
         </div>
         <div className="pc_para" >
            <p align="pc_left">Campus Rush is a virtual recreation of the<br/> entire campus for freshers and other to <br/>roam around and experience the rush</p>
         </div>
         <div  className="pc_scroll">
          <div><span className="pc_donate">Donation Goal</span></div>
           <div className="pc_range-container">
              {/* <input type="range" id="range" min="0" max="100"/>
              <label htmlFor="range">3 Cr</label>  */}
              <div><span>0 Cr</span></div>
              <div style={{width:"239px"}}>
              <Slider
               aria-label="Temperature"
               defaultValue={1.2}
               getAriaValueText={valuetext}
               color="secondary"
               min={0}
               max={3}
               step={0.01}
               valueLabelDisplay="auto"
               width = "239px"
               // style={{background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}
               />
               </div>
              <div><span>3 Cr</span></div>      
            </div>
         </div>
         <br></br>
         <div className="pc_bottom-main-content" >
            <div className="pc_small-heading" ><h1 className="pc_donate">Top Donors</h1></div>
            <div>Ritwik Ganguli - ₹ 1.2 Cr</div>
            <div>Ritwik Ganguli - ₹ 1.2 Cr</div>
         </div>
           <div className="pc_bottom-content" >
            <motion.img className="pc_book" style={{cursor: "pointer"}} src={bookmark} whileHover={{scale: 1.05}}></motion.img>
            <motion.img className="pc_share" style={{cursor: "pointer"}} src={share} whileHover={{scale: 1.05}}/>
            <motion.button className="pc_btn-bottom" whileHover={{scale: 1.05}}>See Details</motion.button>
           </div>
        </motion.div>
    );
}
export default Cardone;