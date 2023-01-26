import React from 'react'
import './going.css'
import img1 from '../../../assets/Home/gcard.png'
import img2 from '../../../assets/Home/gcard_cc.png'
import img3 from '../../../assets/Home/gcard_sail.png'



function Going() {
  return (
    <div className='going'>
      <div className='going_head'>
        Where is your money going?
      </div>
      <div className='going_body'>
        Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi
      </div>
      <div className='going_card'>
        <div className='gc_Alum'>
          Alumni
        </div>
        <div className='gc_rest'>
          Donation Report
        </div>
        <div className='gc_down'>
          <div className='gcard_sail'>
          An initiative by
          </div>
          <div className='gcard_cc'>
          Designed and Developed by
          </div>
        </div>
        <img className='gcard' src={img1} />
        <img className='gcard1' src={img2} />
        <img className='gcard2' src={img3} />
      </div>
      <div className='going_down'>
          Download Report
      </div>
    </div>
  )
}

export default Going