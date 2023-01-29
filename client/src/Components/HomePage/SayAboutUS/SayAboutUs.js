import { React, useEffect, useState, useRef } from 'react'
import './SayAboutUs.css'
import img from '../../../assets/Home/SayAboutUs_Card.png'


const arr = [{
    'name': 'Sabrina Bhattacharya',
    'comment': 'Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi zdfbin  qwoioerg qionsoirdrgtniowoeirpowpedrt',
    'batch': '2018 Batch, Chemical Engineering, B.Tech'
},
{
    'name': 'Sabrina Bhattacharya',
    'comment': 'Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi zdfbin  qwoioerg qionsoirdrgtniowoeirpowpedrt',
    'batch': '2018 Batch, Chemical Engineering, B.Tech'
},
{
    'name': 'Sabrina Bhattacharya',
    'comment': 'Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi zdfbin  qwoioerg qionsoirdrgtniowoeirpowpedrt',
    'batch': '2018 Batch, Chemical Engineering, B.Tech'
},
{
    'name': 'Sabrina Bhattacharya',
    'comment': 'Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi zdfbin  qwoioerg qionsoirdrgtniowoeirpowpedrt',
    'batch': '2018 Batch, Chemical Engineering, B.Tech'
}]

function SayAboutUs() {
    return (
        <div className='SayAboutUs'>
            <div className='SayAboutUs_head'>
                What you guys say about us.
            </div>
            <div className='SayAboutUs_body'>
                Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi
            </div>
            <div className='SayAboutUs_SlideShow'>
                {
                    arr.map((e, index) => {
                        return (
                            <div className={'SayAboutUs_card SAUposition' + (index + 1)}>
                                <img src={img} className='SayAboutUs_card_img' />
                                <div className='SayAboutUs_card_a'>
                                    Alumini student
                                </div>
                                <div className='SayAboutUs_card_b'>
                                    {e.name}
                                </div>
                                <div className='SayAboutUs_card_c'>
                                    {e.comment}
                                </div>
                                <div className='SayAboutUs_card_d'>
                                    {e.batch}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='going_down'>
                Download Report
            </div>
        </div>
    )
}

export default SayAboutUs