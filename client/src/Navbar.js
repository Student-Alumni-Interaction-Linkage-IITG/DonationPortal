import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="intro">
                <div className="college">
                    IIT Guwahati's
                </div>
                <div className="don_portal">
                    Alumni Donation Portal
                </div>
            </div>
            <div className="links">
                <Link to="#">Projects</Link>
                <Link to="#">Club & Events</Link>
                <Link to="#"> Donors' Report</Link>
                <Link to="#" className='login'>Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

