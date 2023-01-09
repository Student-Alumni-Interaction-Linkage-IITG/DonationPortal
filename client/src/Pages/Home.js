import Navbar from '../Components/HomePage/Navbar/Navbar';
import purpose from '../assets/Home/home.png'
import campus from '../assets/Home/campus.png'
import '../Components/HomePage/Home.css'
import Missing from '../Components/HomePage/Missing/Missing'
import Stats from '../Components/HomePage/Stats/Stats'


const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <img src={purpose} alt="" className='purpose'/>
            <img src={campus} alt="" className='home-campus'/>
            <Missing/>
            <Stats/>
            <Missing/>
        </div>
     );
}
 
export default Home;