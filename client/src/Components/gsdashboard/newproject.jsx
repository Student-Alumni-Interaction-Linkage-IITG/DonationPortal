import React, { ChangeEvent,useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Select from 'react-select';
import "../gsdashboard/newproject.css";

export default function NewProject() {
  const data = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];
  const [title, setTitle] = useState('');
  const [isSub, setIsSub] = useState(false);
  const [subtitle, setsubTitle] = useState('');
  const [about, setAbout] = useState('fwe');
  const [donationGoal, setdonationGoal] = useState('');
  const [utilmoney, setutilmoney] = useState('knlkvndlknl');
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedImages , setSelectedImages] = useState([]);
  const [tags , setTags] = useState([]);
  
  const tagHandleChange = (e)=>{
    if(e.target.files){
      console.log(e.target.files)
      const fileArray1 = Array.from(e.target.files).map((file)=>file.name)
      setTags((prevTags)=>prevTags.concat(fileArray1))
      console.log(fileArray1)
    }
  }
  const imageHandleChange= (e) =>{
       
      if(e.target.files){
        const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
        

        setSelectedImages((prevImages)=>prevImages.concat(fileArray))
        Array.from(e.target.files).map(
          (file)=>URL.revokeObjectURL(file)
        )
      }
  }
  const renderTags = (source) =>{
    return source.map((tag)=>{
      return <div className='tag' key={tag}>{tag}</div>
    })
  }
  const renderPhotos = (source) =>{
    return source.map((photo)=>{
      return <img src={photo} key={photo}/> 
    })
  }
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }
 
  return (
    <div>
      <form className='form'>
        <div className='ff'>
          <label htmlFor="Title" className='headiing'>Title</label><br />
          <input type="text" id="Title" name="Title" placeholder='Project 1' className='textarea1' value={title} onChange={e => setTitle(e.target.value)} />
          <img src={require('../../assets/images/dust.png')} className="dust" onClick={() => { setTitle('') }} />
          {isSub && <><label htmlFor="subTitle" className='headiing'>Sub-Title</label><br />

            <input type="text" id="subTitle" name="subTitle" placeholder='Project 1' className='textarea1' value={subtitle} onChange={e => setsubTitle(e.target.value)} />
            <img src={require('../../assets/images/dust.png')} className="dust1" onClick={() => { setsubTitle('') }} /></>}
          {isSub == false && <div className='subtitle' onClick={() => { setIsSub(true) }}>
            <p className='add'>+</p>
            <p> Add Sub title</p>
          </div>}
        </div>

        <div className='ff'>
          <div className="headiing">Project Approval Document*</div><br />
          <div className='subtitle'>
            <label htmlFor="document"></label>
            <input type="file" id="document" name="document"></input>
          </div>
        </div>

        <div className='ff'>
         
            <div className='headiing'>About Project</div>
            <br/>
            <div>
            <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: 1060, border: "1px solid black", borderRadius: "10px" , padding: "10px"}}
         value={utilmoney} onChange={e => setutilmoney(e.target.value)}
              />
            </div>
          <img src={require('../../assets/images/dust.png')} className="dust2" onClick={() => { setutilmoney('') }} />
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
        <div className="ff">
        <div className="headiing">Add Tags</div><br/>
        <div className="selection">
          <Select
            className="dropdown"
            placeholder="Select Option"
            value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
            isMulti
            isClearable
          />
          </div>
        </div>

        <div className='ff'>
          <label htmlFor="donation" className='headiing'>Donation Goal</label><br />
          <input type="text" id="donation" name="donation" placeholder='000 $' className='textarea1' value={donationGoal} onChange={e => setdonationGoal(e.target.value)} />
          <img src={require('../../assets/images/dust.png')} className="dust" onClick={() => { setdonationGoal('') }} />
        </div>

        <div className='ff'>
         
            <div className='headiing'>How will you use your money?</div>
            <br/>
            <div>
            <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: 1060, border: "1px solid black", borderRadius: "10px" , padding: "10px"}}
         value={utilmoney} onChange={e => setutilmoney(e.target.value)}
              />
            </div>
          <img src={require('../../assets/images/dust.png')} className="dust2" onClick={() => { setutilmoney('') }} />
        </div>

        <div className="ff">
        <label htmlFor="attach_files" className='headiing'>Attach Files</label><br />
        <div className="subtitle">
        <input type="file" multiple id="file" onChange={tagHandleChange}/>
        <br/>
        <div className='kk'>
        {renderTags(tags)}
        </div>
        
        </div>
        </div>

        <div className='buttons1'>
          <button className='bt'>Preview</button>
          <button className='bt'>Save Draft</button>
          <button className='bt'>Approval Request</button>
          <button className='bt'>Post</button>
        </div>
      </form>
    </div>
  )
}