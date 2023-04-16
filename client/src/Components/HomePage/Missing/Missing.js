import './missing.css'
import Card from '../Card/Card.js'
import { Link, useHistory } from 'react-router-dom'

const Missing = () => {
    const history = useHistory()
    
    return ( 
        <div className="home-missing">
            <div className="home-title">What are you missing?</div>
            <div className="home-para">Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta fermentum velit lectus viverra. Ut elit mattis feugiat morbi ut. Nam facilisis in vel magna condimentum. Et etiam urna lectus tempus. Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi </div>
            <div className="home-card-container">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Link to="/projects.js">
                <div className="home-project-btn"><div className="home-btn">See all projects</div></div>
            </Link>
        </div>
     );
}
 
export default Missing;