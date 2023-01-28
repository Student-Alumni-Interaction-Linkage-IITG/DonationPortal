import React from 'react'
import Navbar from '../profile/profileNavbar'
import Footer from '../../Components/HomePage/Footer/Footer'
import Payment from './payment'
import General from './general'
import Lorem from './lorem'
import filter_icon from '../../assets/FAQs/filter.png';
import { useState, useEffect, useRef } from 'react';
import './FAQs.css'

function FAQs(){
    var temp = <General />
    const [dis, setdis] = useState(0);
    switch (dis) {
        case 0: temp = <General />; break;
        case 1: temp = <Lorem />; break;
        case 2: temp = <Payment />; break;
        default: break;
    }
    const u1 = useRef()
    const u2 = useRef()
    const u3 = useRef()
    useEffect(() => {
        // console.log(search);
        u1.current.className = 'general_button'
        u2.current.className = 'general_button'
        u3.current.className = 'general_button'
        switch (dis) {
            case 0: u1.current.className = 'general_button_after'; break;
            case 1: u2.current.className = 'general_button_after'; break;
            case 2: u3.current.className = 'general_button_after'; break;
            default: break;
        }
    }, [dis])
    return(
        <div className='faq'>
            <div className='nav_faq'>
                <Navbar/>
            </div>
            <div className='path_faq'>
                <div className='path_foot'>Footer</div> {">"}
                <div className='path_learn'>Learn More</div> {">"}
                <div className='path_f'>FAQs</div>
            </div>
            <div className='categories_faq'>
                <button ref={u1} id='gen_id' onClick={() => { if (dis !== 0)setdis(0)}}>General</button>
                <button ref={u2} id='lor_id' onClick={() => { if (dis !== 1) setdis(1) }}>Lorem Ipsum</button>
                <button ref={u3} id='pay_id' onClick={() => { if (dis !== 2) setdis(2) }}>Payment</button>
                <div className='faq_right'>
                    <div className='search'>
                        <input type='text' className='search_ques' placeholder='Search something...'></input>
                    </div>
                    
                    <button className='filter_button'>
                        <img src={filter_icon} alt="" className='filter_icon'></img>
                            Filters
                    </button>
                </div>
            </div>
            <div className='content_faq'>
                <div className='ques_faq'>
                    {temp}
                </div>
            </div>
            <div className='email_faq'>
                <div className='email_left'>
                    <div className='p1_faq'>
                        Can't find what you are looking for?
                    </div>
                    <div className='p2_faq'>
                        Get in touch and we'd fix it for you!
                    </div>
                </div>
                <button className='email_button_faq'>Send Email</button>
            </div>
            <div className='footer_faq'>
                <Footer/>
            </div>
        </div>
    )
}

export default FAQs