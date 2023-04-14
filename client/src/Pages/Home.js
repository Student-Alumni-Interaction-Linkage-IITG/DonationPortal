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
import Footer from '../Components/HomePage/Footer/Footer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Home = () => {
//     const [project, setProject] = useState({});
//   const [projectDetails, setProjectDetails] = useState({});

//   const handleClick = async (id) => {
//     try {
//       const response = await axios.get(`/api/projects/${id}`);
//       setProject(response.data.project);
//       setProjectDetails(response.data.projectDetails);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
const projectId="6432cd63db79fcf538dc746b";
const history = useHistory();

const handleClick = async () => {
  history.push(`/project/${projectId}`);
};
    return ( 
        <div className="home">
            <button style={{marginRight:10}} onClick={handleClick} >Edit</button>
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
            <Footer/>
        </div>
     );
}
 
export default Home;