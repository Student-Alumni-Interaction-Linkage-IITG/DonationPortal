import Navbar from '../Components/HomePage/Navbar/Navbar';
import purpose from '../assets/Home/home.png'
import campus from '../assets/Home/campus.png'
import '../Components/HomePage/Home.css'
import Missing from '../Components/HomePage/Missing/Missing'
import Stats from '../Components/HomePage/Stats/Stats'
import Going from '../Components/HomePage/Going/Going';
import Away from '../Components/HomePage/Away/Away';
import WeAre from '../Components/HomePage/WeAre/WeAre';
import SayAboutUs from '../Components/HomePage/SayAboutUS/SayAboutUs';
import MediaRelease from '../Components/HomePage/MediaRelease/MediaRelease';

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <img src={purpose} alt="" className='purpose'/>
            <img src={campus} alt="" className='home-campus'/>
            <Missing/>
            <Stats/>
            <Missing/>
            <Going/>
            <Away/>
            <WeAre/>
            <SayAboutUs/>
            <MediaRelease/>
        </div>
     );
}
 
export default Home;