import './missing.css'
import Card from '../Card/Card'

const Missing = () => {
    return ( 
        <div className="missing">
            <div className="title">What are you missing?</div>
            <div className="para">Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta fermentum velit lectus viverra. Ut elit mattis feugiat morbi ut. Nam facilisis in vel magna condimentum. Et etiam urna lectus tempus. Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi </div>
            <div className="card-container">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="project-btn"><div className="btn">See all projects</div></div>
        </div>
     );
}
 
export default Missing;