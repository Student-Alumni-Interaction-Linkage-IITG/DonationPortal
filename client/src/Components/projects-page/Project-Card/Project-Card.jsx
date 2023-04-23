import './Project-Card.css'
import { useState } from 'react'
import { useHistory } from 'react-router';
import card from '../../../assets/images/projects-page/Campus.png'
import logo from '../../../assets/Home/logo.png'
import arrow from '../../../assets/Home/arrow.png'
import save from '../../../assets/Home/save.png'
import share from '../../../assets/Home/share.png'

const Card = (props) => {
    const [value, setValue] = useState(100);
    const history = useHistory();

   //  const changeValue = (event) => {
   //      setValue(event.target.value);
   //    };

    return ( 
        <div className="p-card">
            <div className="p-proj-abt">
                <div className="p-club-info">
                    <div className='p-club-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className="p-club-desc">
                        <div className="p-proj-name">{props.name}</div>
                        <div className="p-proj-desc">{props.subtitle}</div>
                    </div>
                </div>
                <div className="p-arrow" onClick={()=>history.push('/projectdetail')} >
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="card-img"><img src={card} alt="" /></div>
            <div className="p-card-desc"><div>{props.desc}</div></div>
            <div className="p-goal">Donation Goal</div>

            <div className="p-slider-cont">
                <label htmlFor="slider">0</label>
                <input
                    type='range'
                  //   onChange={changeValue}
                    min={1}
                    max={400}
                    step={1}
                    value={value}
                    className='p-slider'
                    id='slider'
                ></input>
                <label htmlFor="slider">3 Cr</label>
            </div>

            <div className="top-donor-cont">
               <div className="td-heading">Top Donors</div>
               <div className="td-names">
                  <div className="td-name">Ritwik Ganguli - ₹ 1.2 Cr</div>
                  <div className="td-name">Ritwik Ganguli - ₹ 1.2 Cr</div>
               </div>
            </div>

            <div className="p-card-btns">
                <div className="p-card-icons">
                    <div>
                        <img src={save} alt="" style={{width: 14, height:18}}/>
                    </div>
                    <div>
                        <img src={share} alt="" style={{width: 18, height: 19.92}}/>
                    </div>
                </div>
                <a href="http://localhost:8000/donate" style={{textDecoration: "none"}} className="p-card-donate"><div>Donate</div></a>
            </div>
            
        </div>
     );
}
 
export default Card;