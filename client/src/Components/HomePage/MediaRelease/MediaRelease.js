import React from 'react'
import './MediaRelease.css'
import img from '../../../assets/Home/MR.png'
function MediaRelease() {
    return (
        <div className='MR'>
            <div className='MR_head'>
                Media Release
            </div>
            <div className='MR_content'>
                <div className='MR_c_head'>
                    Making An
                    <div className='MR_c_head_b'> Impact</div>
                </div>
                <div className='MR_cards_show'>

                    <div className='MR_cards'>
                        <img src={img} />
                        <div className='MR_cards_head'>
                            IIT Guwahati to collaborate with Assam govt to enhance region's development
                        </div>
                        <div className='MR_cards_content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitdit proin. Nulla facilisis pulvinar urna ffffffff
                        </div>
                        <a href='#' className='MR_cards_link'>
                            Read the full article
                        </a>
                    </div>

                    <div className='MR_cards'>
                        <img src={img} />
                        <div className='MR_cards_head'>
                            IIT Guwahati to collaborate with Assam govt to enhance region's development
                        </div>
                        <div className='MR_cards_content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitdit proin. Nulla facilisis pulvinar urna ffffffff
                        </div>
                        <a href='#' className='MR_cards_link'>
                            Read the full article
                        </a>
                    </div>

                    <div className='MR_cards'>
                        <img src={img} />
                        <div className='MR_cards_head'>
                            IIT Guwahati to collaborate with Assam govt to enhance region's development
                        </div>
                        <div className='MR_cards_content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitdit proin. Nulla facilisis pulvinar urna ffffffff
                        </div>
                        <a href='#' className='MR_cards_link'>
                            Read the full article
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MediaRelease