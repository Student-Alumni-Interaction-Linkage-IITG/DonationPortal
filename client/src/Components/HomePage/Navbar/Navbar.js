import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="intro">
                <div className="don_portal">
                    Alumni Donation Portal
                </div>
            </div>
            <div className="links">
                <Link to="/projects.js">Projects & Events</Link>
                <Link to="#">How to Donate</Link>
                <Link to="#"> Donors' Report</Link>
                <Link to="#" className='login'>Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

