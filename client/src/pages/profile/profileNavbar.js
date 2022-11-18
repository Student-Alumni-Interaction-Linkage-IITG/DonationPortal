// All classNames assigned to various elements contain "pp-" in the beginning , which stands for "profile page"

import React from "react";
import { Link } from 'react-router-dom';

const profileNavbar = () => {
    return (
        <nav className="pp-Navbar">
            <div className="ppLinks">
                <Link to='/'  style={{textDecoration: 'none' ,color: '#333333'}}>Projects and Events</Link>
            </div>
            <div className="ppLinks">
                <Link to="#" style={{textDecoration: 'none' ,color: '#333333'}}>How to Donate</Link>
            </div>
            <div className="ppLinks">
                <Link to="#" style={{textDecoration: 'none' ,color: '#333333'}}>Donors’ Report</Link>
            </div>
            <div className="ppLinks">
                <Link to="#" style={{textDecoration: 'none' ,color: '#333333'}}>My Profile</Link>
            </div>
        </nav>
    )
}

export default profileNavbar