import { Link } from 'react-router-dom';
import img from "../../../assets/images/projects-page/sort.png";
import bell from "../../../assets/images/projects-page/bell.png";
import emoji from "../../../assets/images/projects-page/emoji.png";
import "./Next.css"

function NextNavbar()
{
    return(
        <div className='navbar'>
            <nav>
                <div className='main-cont' >
                    <div><a className='link' href=''>Projects and Events</a></div>
                    <div><a  className='link'href=''>How to Donate</a></div>
                    <div><a className='link' href=''>Donor's Report</a></div>
                </div>
                <div className='side-cont' >
                    <div><img className='bell-img' src={bell}/></div>
                    <div className='small'>
                        <img className='cont' src={emoji} />
                        <span>Virushastra</span>
                    </div>
                    <div><button className='btn-small'>Log Out</button></div>
                </div>
            </nav>
        </div>
    );
}
export default NextNavbar;