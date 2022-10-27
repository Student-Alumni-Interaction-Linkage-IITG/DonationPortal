import { Link } from 'react-router-dom';

const Navbar2 = () =>{
    return(
        <nav className="Navbar2">
           <div className="Links1">
                <Link to='/'>Technical Board</Link>
            </div>
            <div className="Links2">
                <Link to="#">Cultural Board</Link>
            </div>
            <div className="Links2">
                <Link to="#">Students Welfare Board</Link>
            </div>
            <div className="Links2">
                <Link to="#" className="Hostel Affairs Board">Enabled</Link>
            </div>
            <div className="Links2">
                <Link to="#">Sports Board</Link>
            </div>
            <div className="Links2">
                <Link to="#">SWC</Link>
            </div>
            <div className="Links2">
                <Link to="#">SAIL</Link>
            </div>
        </nav>
    )
}

export default Navbar2;