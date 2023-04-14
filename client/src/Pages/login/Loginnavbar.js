import { Link } from 'react-router-dom';
import './loginnavbar.css';

const Navbar = () => {

    return ( 
        <nav className="login-navbar">
            <div className="login-intro">
                    <div className="login-don_portal">
                        {/* Alumni Donation Portal */}
                    </div>
            </div>
            <div className="login-links">
                <Link to="/projects.js">Projects & Events</Link>
                <Link to="#">How to Donate</Link>
                <Link to="#"> Donors' Report</Link>
                <Link to="/login.js" className='login'>Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

