import React, { ChangeEvent,useState } from 'react';
import { Link } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Select from 'react-select';
import "../gsdashboard/Gsproject_putiing.css"
import { useLocation } from 'react-router-dom';

import axios from 'axios';

export default function Close_project() {
  
  const location = useLocation();
  const data = location.state;

  const [selectedImages , setSelectedImages] = useState([]);
  const [emails , setEmails] = useState([""]);
  const [email,setEmail] = useState("");

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  console.log({editorState});

  var closer = {
    "project_id": "5f9f1b0b0b1b9c0b1c1c1c1c",
    "project_title": "Project Title",
    "project_description": "Project Description",
    "project_status": "Closed",
    "to": emails,
    "body": {
      "subject": "Project Title",
      "text": editorState
    }
  }


  const handleClick= (e)=>{
    e.preventDefault();
    // if(email!="")
    // {
    //     e.preventDefault();
    // }
    console.log(email);
    if(email!=="")
    setEmails((emal)=>emal.concat(email))

    setEmail("");
    console.log(emails);
  }
  const listEmails = emails.map( ema =>
    <div className='tag' key={ema}>{ema}</div>);


  const imageHandleChange= (e) =>{
       
      if(e.target.files){
        const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
        

        setSelectedImages((prevImages)=>prevImages.concat(fileArray))
        Array.from(e.target.files).map(
          (file)=>URL.revokeObjectURL(file)
        )
      }
  }
  
  const renderPhotos = (source) =>{
    return source.map((photo)=>{
      return <img src={photo} key={photo}/> 
    })
  }
  
  // const handleChange1 = (e) =>{
  //   setFilelist(URL.createObjectURL(e.target.files));
  // }
  // const FIles = filelist? [...filelist] : [];
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
        <img src={require('../../assets/images/ref.png')} className="headImage" />
        <div className="headname">
          <div className='headname1'>Project Title</div>
          <div className="headname2">Sub Title</div>
          

        </div>
      </div>
      <div className="slides">
            <Link to="/dashboard" className="sl1">Dashboard</Link>
            <div className="sl"> &#62; </div>
            <div className="sl1">Ongoing Projects</div>
            <div className="sl"> &#62; </div>
            <Link to="/projectdetail.js" className="sl1">Project Details</Link>
            <div className="sl"> &#62; </div>
            <div className="sl1">Close Event</div>
      </div>
      
      <form className='form'>
        

        

        <div className='ff'>
         
            <div className='headiing'>Add Text</div>
            {/* <div className='grp'>
              <img className='ico' src={require('../../assets/images/bold.png')} />
              <img className='ico' src={require('../../assets/images/italics.png')} />
              <img className='ico' src={require('../../assets/images/underline.png')} />
              <img className='ico' src={require('../../assets/images/aA.png')} />
            </div>
            <div className='grp'>
              <img className='ico' src={require('../../assets/images/table.png')} />
              <img className='ico' src={require('../../assets/images/list.png')} />
              <img className='ico' src={require('../../assets/images/lisst2.png')} />
              <img className='ico' src={require('../../assets/images/quotes.png')} />
            </div>
            <div className='grp'>
              <img className='ico' src={require('../../assets/images/scan.png')} />
              <img className='ico' src={require('../../assets/images/photo.png')} />
              <img className='ico' src={require('../../assets/images/Video.png')} />
            </div> */}
            <br/>
            <div>
            <Editor 
          editorState={editorState}
          onEditorStateChange={setEditorState}
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         toolbar={{
          options: ['inline',  'fontSize', 'fontFamily', 'history'],
          inline: {
            options: ['bold', 'italic', 'underline','superscript','subscript'],
          }
        }}
         wrapperStyle={{ height: 160,width: "73vw", border: "1px solid black", borderRadius: "10px" , padding: "10px",overflow: "hidden"}}
         
              />
            </div>
          <img src={require('../../assets/images/dust.png')} className="dust2" />
        </div>

        <div className='ff'>
          <div className="headiing">Attach Images</div><br />
          <div>
                <input type="file" multiple id="file" onChange={imageHandleChange}/>
                <div className="result">
                {renderPhotos(selectedImages)}
                </div>
          </div>
        </div>


        <div className='ff'>
          <div className="headiing">Attach Mail</div><br />
          <div className='subtitle'>
            <label htmlFor="document"></label>
            <input type="file" id="document" name="document"></input>
          </div>
        </div>

        <div className='ff'>
          <div className="headiing">Mailing List</div><br />
          <div className='subtitle'>
            <label htmlFor='mails'></label>
            <input type="text" id="mails" name='mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <button onClick={handleClick}>&#9745;</button>
            </div> 
             <div className="emails">
                {listEmails}
            </div> 
          
        </div>
        
        
        <div className='ff'>
          <div className="headiing">Upload Summary</div><br />
          <div className='subtitle'>
            <label htmlFor="document"></label>
            <input type="file" id="document" name="document"></input>
            
          </div>
        </div>
        

        <div className='buttons1'>
          <button className='bt'>Preview</button>
          <button className='bt'>Save Draft</button>
          <button className='bt'>Approval Request</button>
          {/* <button className='bt1'
            onClick={()=>{
              axios
              .post(`${URL}`, {closer})
              .then((res) => {
                console.log(res);
                if (res.status == 200)
                {
                  alert("success");
                }
              })
              .catch((err) => {
                console.log(err);
              });
              setEmail = "";
              setEmails = [""];
              setSelectedImages = [];

              }
            }
          >
            Post
          </button> */}
        </div>


      </form>

    </div>
  )
}
