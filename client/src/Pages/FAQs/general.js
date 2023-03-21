import React from "react";
import data from '../../Database/faq.json'
import show_ans from '../../assets/FAQs/answer.png'
import './FAQs.css'
import { useState } from "react";


function General(){
    const[ans, setans] = useState(-1);
    function rotateImage(idx) {
        for(let i=0; i<data.general.length; i++){
            var myImage = document.getElementById(`${i}ans_icon`);
            myImage.style.transform = 'rotate(0deg)';
        }
        var myImage2 = document.getElementById(`${idx}ans_icon`);
        myImage2.style.transform = 'rotate(180deg)';
    }
    function rotateImage2() {
        for(let i=0; i<data.general.length; i++){
            var myImage = document.getElementById(`${i}ans_icon`);
            myImage.style.transform = 'rotate(0deg)';
        }
    }
    
    return(
        <div className="qs_faq">
            {data.general.map((data, idx)=>{
                return(
                    <div className="general_faq">
                        <div className="qs">
                            <div className="index">
                                {idx+1}.
                            </div>
                            <div className="ques">
                                {data.ques}
                            </div>
                            <img src={show_ans} alt="" className="show_ans" id={`${idx}ans_icon`} onClick={()=>{             
                                if(idx!==ans){
                                    setans(idx);
                                    rotateImage(idx);
                                }
                                else{
                                    setans(-1);
                                    rotateImage2();
                                }}}></img>
                        </div>
                        
                        {ans===idx ?(    
                            <div>
                                
                                <div className="ans">
                                    {data.ans}
                                </div>
                            </div>
                        ):
                        (
                            <div >
                                
                            </div>
                        )
                        }
                        
                    </div>
                )
            })}
        </div>
    )
}

export default General