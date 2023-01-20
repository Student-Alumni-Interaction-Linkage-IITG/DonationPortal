import React from "react";
import  "./slider2.css";
import Slider  from "@mui/material/Slider";
import { motion, spring } from "framer-motion";

function valuetext(value) {
   return `${value}°C`;
 }
function Slider2()
{
    return(
         <div  className="scroll">
           <div className="range-container">
              {/* <input type="range" id="range" min="0" max="100"/>
              <label htmlFor="range">3 Cr</label>  */}
              <div><span>0 Cr</span></div>
              <div style={{width:"239px"}}>
              <Slider
               aria-label="Temperature"
               defaultValue={1.2}
               value={0.4}
               getAriaValueText={valuetext}
            //    color="secondary"
               color="primary"
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
    );
}
export default Slider2;