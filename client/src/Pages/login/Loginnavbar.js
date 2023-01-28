import { Link } from 'react-router-dom';
import "./loginnavbar.css";
const Loginnavbar = () =>{
    return(
        <nav className="loginnavbar">
            <div className="loginlink">
                <Link to='/'>Projects and Events</Link>
            </div>
            <div className="loginlink">
                <Link to="#">How to Donate</Link>
            </div>
            <div className="loginlink">
                <Link to="#">Donor's Report</Link>
            </div>
            <div className="lognav">
                <button className='loginnavbutton' type="Login">Log In</button>
            </div>
        </nav>
    );
}

export default Loginnavbar;