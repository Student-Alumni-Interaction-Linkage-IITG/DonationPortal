import React from 'react'
import './away.css'
import img from '../../../assets/Home/iitg.png'


function Away() {
  return (
    <div className='Away'>
        <div className='Away_head'>
        While you were away
        </div>
        <div className='Away_body'>
        Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi 
        </div>
        <img src={img} className='Away_vid'/>
    </div>
  )
}

export default Away