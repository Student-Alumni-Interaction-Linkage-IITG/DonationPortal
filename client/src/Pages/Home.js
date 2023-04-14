import Navbar from '../Components/HomePage/Navbar/Navbar';
import purpose from '../assets/Home/home.svg'
import campus from '../assets/Home/campus.png'
import '../Components/HomePage/Home.css'
import Missing from '../Components/HomePage/Missing/Missing'
import Stats from '../Components/HomePage/Stats/Stats'
import Going from '../Components/HomePage/Going/Going';
import Away from '../Components/HomePage/Away/Away';
import WeAre from '../Components/HomePage/WeAre/WeAre';
import SayAboutUs from '../Components/HomePage/SayAboutUS/SayAboutUs';
import MediaRelease from '../Components/HomePage/MediaRelease/MediaRelease';
import Footer from '../Components/HomePage/Footer/Footer'
import NextNavbar from '../Components/projects-page/Projects-Navbar/NextNavbar';
import { useRef } from 'react';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    // const ref1 = useRef(null);
    const ref2 = useRef(null);
    const handleClick = () => {
        ref2.current.scrollIntoView({behavior: 'smooth'});
    }


    return ( 
        <div className="home">
            {   user?<NextNavbar/>:<Navbar/>   }
            <img src={purpose} alt="" className='purpose' onClick={handleClick}/>
            <img src={campus} ref={ref2} alt="" className='home-campus'/>
            <Missing/>
            <Stats/>
            <Missing/>
            <Going/>
            <Away/>
            <WeAre/>
            <SayAboutUs/>
            <MediaRelease/>
            <Footer/>
        </div>
     );
}
 
export default Home;