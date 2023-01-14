//Here class names are of the form {nn_classname}

import { Link } from 'react-router-dom';
import img from "../../../assets/images/projects-page/sort.png";
import bell from "../../../assets/images/projects-page/bell.png";
import emoji from "../../../assets/images/projects-page/emoji.png";
import "./Next.css"

function NextNavbar()
{
    return(
        <div className='nn_navbar'>
            <nav>
                <div className='nn_main-cont' >
                    <div><a className='nn_link' href=''>Projects and Events</a></div>
                    <div><a  className='nn_link'href=''>How to Donate</a></div>
                    <div><a className='nn_link' href=''>Donor's Report</a></div>
                </div>
                <div className='nn_side-cont' >
                    <div><img className='nn_bell-img' src={bell}/></div>
                    <div className='nn_small'>
                        <img className='nn_cont' src={emoji} />
                        <span>Virushastra</span>
                    </div>
                    <div><button className='nn_btn-small'>Log Out</button></div>
                </div>
            </nav>
        </div>
    );
}
export default NextNavbar;