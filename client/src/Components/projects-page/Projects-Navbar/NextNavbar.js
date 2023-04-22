//Here class names are of the form {nn_classname}

import { Link } from 'react-router-dom';
import img from "../../../assets/images/projects-page/sort.png";
import bell from "../../../assets/images/projects-page/bell.svg";
import emoji from "../../../assets/images/projects-page/emoji.png";
import notificons from '../../../assets/images/profile-images/navprofilepic.png'
import "./Next.css"
import { useLogout } from '../../../hooks/useLogout';

function NextNavbar()
{
    const {logout} = useLogout();

    const handleClick = () => {
        logout();
    }

    const user = JSON.parse(localStorage.getItem('user'));

    return(
        <div className='nn_navbar'>
            <nav>
                <div className="nn_main-cont">
                    <Link to="/" className='nn_link'>Home</Link>
                    <Link to="/projects" className='nn_link'>Projects & Events</Link>
                    <Link to="#" className='nn_link'>How to Donate</Link>
                    <Link to="#" className='nn_link'> Donors' Report</Link>
                    {/* <Link to="/login.js" className='login'>Login</Link> */}
                </div>
                <div className='nn_side-cont' >
                    <div><img className='nn_bell-img' src={bell}/></div>
                        <div className='nn_small'>
                            <Link to="/myprofile" className='nn_profile'>
                                <img className='nn_cont' src={user.user.picture?user.user.picture:notificons} />
                                <span>{user.user.name}</span>
                            </Link>
                        </div>
                    <div><button className='nn_btn-small' onClick={handleClick}>Log Out</button></div>
                </div>
            </nav>
        </div>
    );
}
export default NextNavbar;