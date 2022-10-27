import { Link } from 'react-router-dom';

const Navbar1 = () =>{
    return(
        <nav className="Navbar1">
            <div className="links1">
                <Link to='/'>Projects and Events</Link>
            </div>
            <div className="links2">
                <Link to="#">How to Donate</Link>
            </div>
            <div className="links2">
                <Link to="#">Donor's Report</Link>
            </div>
            <div className="links4">
                <Link to="#" className="Enabled">Enabled</Link>
            </div>
        </nav>
    );
}

export default Navbar1;