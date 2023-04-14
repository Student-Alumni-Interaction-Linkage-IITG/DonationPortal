import React, { ChangeEvent,useState,useEffect } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Select from 'react-select';
import "../gsdashboard/Gsproject_putiing.css";
import NewProject from '../../Components/gsdashboard/newproject';
import Ongoingprojectspage from '../../Components/gsdashboard/Ongoingprojectspage';
import ApprovalPendingpage from '../../Components/gsdashboard/ApprovalPendingpage';

export default function Gsproject_putiing() {

const [type, setType] = useState(1);

var show = <NewProject/>

if(type==1){
  show=<NewProject/>
}

else if(type==2){
  show=<Ongoingprojectspage/>
}

else if(type==3){
  show=<ApprovalPendingpage/>
}

  return (
    <div>
      <div className="nav">
        <div className="ring">
          <img src={require('../../assets/images/Vector2.png')} />
        </div>
        <div className="button1">
          Dashboard
        </div>
        <div className="button2">
          LogOut
        </div>
      </div>
      <div className="head">
        <img src={require('../../assets/images/codingclubLogo.png')} className="headImage" />
        <div className="headname">
          <div className='headname1'>General Secretary</div>
          <div className="headname2">Technical Board</div>
          <div className="headname3">IITG</div>

        </div>
      </div>
      <div className="buttons"><div className={type==1 ? "but1":"but2"} onClick={()=>{setType(1)}}>
        Create New Project
      </div>
        <div className={type==2 ? "but1":"but2"} onClick={()=>{setType(2)}}>
          Ongoing Projects
        </div>
        <div className={type==3 ? "but1":"but2"} onClick={()=>{setType(3)}}>
          Approval Pending
        </div>
        <div className={type==4 ? "but1":"but2"}>
          Approved
        </div>
      </div>
      {show}

    </div>
  )
}
