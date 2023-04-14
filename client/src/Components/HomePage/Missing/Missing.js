import './missing.css'
import Card from '../Card/Card.js'
import { useEffect, useState } from 'react'
import Cards from '../../Card'
// import project from '../../../../../server/models/projectCreation';


const Missing = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/allProject").then(res => {
            return res.json()
        }).then(data => {
            // console.log(data)
            setCards(data);
        })
    }, []);
    return (
        <div className="home-missing">
            <div className="home-title">What are you missing?</div>
            <div className="home-para">Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta fermentum velit lectus viverra. Ut elit mattis feugiat morbi ut. Nam facilisis in vel magna condimentum. Et etiam urna lectus tempus. Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi </div>
            <div className="home-card-container">
                {cards.slice(0,3).map(card => (
                    <Card props={card}/>
                ))}
            </div>
            <div className="home-project-btn"><div className="home-btn">See all projects</div></div>
        </div>
    );
}

export default Missing;