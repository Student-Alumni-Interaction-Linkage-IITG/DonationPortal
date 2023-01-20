import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="home-navbar">
            <div className="home-intro">
                <div className="home-don_portal">
                    Alumni Donation Portal
                </div>
            </div>
            <div className="home-links">
                <Link to="/projects.js">Projects & Events</Link>
                <Link to="#">How to Donate</Link>
                <Link to="#"> Donors' Report</Link>
                <Link to="#" className='login'>Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

