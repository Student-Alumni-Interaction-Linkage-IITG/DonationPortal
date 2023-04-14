
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Navbar1 from '../../Components/Navbar1p2';
import Navbar2 from '../../Components/Navbar2p2';
import img1 from "../../assets/images/icon.png";
import img2 from "../../assets/images/Vector.png";
import './projectdetail.css';
import img3 from "../../assets/images/iconpdf.png";
import Slideshow from '../../Components/slideshow';
import NextNavbar from '../../Components/projects-page/Projects-Navbar/NextNavbar.js';
// import Slider from '../../Components/ProjectDetailPage/Slider.js';
// import Slider2 from '../../Components/ProjectDetailPage/slider2.jsx';
import { useEffect, useRef,useState} from 'react';
import axios from 'axios';
import {getProjectDetails,getProject} from '../../hooks/api';



const Projectdetail = () => {

const { id } = useParams();
  const [project, setProject] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //const projectData = await getProject(id);
      const projectDetailsData = await getProjectDetails(id);
      //setProject(projectData);
      setProjectDetails(projectDetailsData);
    };
    fetchData();
  }, [id]);


//import { useRef,useState } from 'react';
//import Navbar from '../../Components/HomePage/Navbar/Navbar';
//const Projectdetail = () => {
  //  const user = JSON.parse(localStorage.getItem('user'));
    const ref1= useRef()
    const [see,setSee]=useState("more")
    const clickhandle=()=>{
        if(ref1.current.style.height=='40vh'|| ref1.current.style.height==""){
            ref1.current.style.height='100%'
            setSee("less")
        }
        else{
            ref1.current.style.height='40vh'
            setSee("more")
        }
            
    }
    return(
        <Router>
            {user? <NextNavbar/>:<Navbar/>}
                
                <div className="main">
                <div className="navigatorBar">
                    <div>
                        <img src={img1} className="" alt=""/>
                    </div>
                    <div className="linkstab">
                        <a href="#">Projects</a> <img src={img2} className="arrowsmall"/> <a href="#">Board</a> <img src={img2} className="arrowsmall" alt=""/> <a href="#">Campus Rush</a>
                    </div>    
                </div>
                <div className='buttoncontainer'>
                    <a href="#" style={{textDecoration: 'none'}}><button className="Buttonp3">Technical</button></a>
                    <a href="#" style={{textDecoration: 'none'}}><button className="Buttonp3">Coding</button></a>
                    <a href="#" style={{textDecoration: 'none'}}><button className="Buttonp3">Project</button></a>
                </div>
                <div className='projectcontainer'>
                    <div className='projectinfo'>
                        <div className="Header4p2">{projectDetails.name}</div>
                        <div className="Subtitle4p2">I'll give you a subtitle soon</div>
                        <div className="Header5p2"><p>About Project</p></div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                        <div className="para3p2" ref={ref1}>Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida eget pretium a mi. Consectetur non dignissim in nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo  Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo  Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo </div>
                        <div>
                        <button className="seemorebtn" onClick={clickhandle}>See {see}</button>
                        </div> 
                        </div>
                        <button  className="Buttonp5"><a href="#" style={{textDecoration: 'none'}}>Donate Now</a></button>
                    </div>
                    <div className="projectimage"><Slideshow/></div>
                </div>
                <div className='donationcontainer'>
                    <div className="Header5p2">Donation Goal</div>

                    <div className="range-container2">
                        <label htmlFor="rangestart"><div className='sliderletters'>0 </div></label>
                        <input type="range" id="range" min="0" max="100" value="67" class="slider" valueLabelDisplay="on" />
                        <label htmlFor="range"><div className='sliderletters'> 3 Cr</div></label>
                        {/* <Slider2 /> */}

                    </div>
                    <div className='donationinfo'>
                        <div className='donationleft'>Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida eget pretium a mi. Consectetur non dignissim in</div>
                        <div className='donationright'>nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero</div>
                    </div>

                </div>
                <div className="donarcontainer">
                    <div className="Header5p2">Top Donar</div>
                    <div className="btncontainer2">
                        <btn className="Buttonp4">
                            <h1>2 Cr.</h1> <p style={{
                                paddingTop: "15px"
                            }}>Ritwik Ganguli</p>
                        </btn>
                        <btn className="Buttonp4">
                            <h1>2 Cr.</h1> <p style={{
                                paddingTop: "15px"
                            }}>Ritwik Ganguli</p>
                        </btn>
                        <btn className="Buttonp4">
                            <h1>2 Cr.</h1> <p style={{
                                paddingTop: "15px"
                            }}>Ritwik Ganguli</p>
                        </btn>
                    </div>
                    <div><p><a href="#" className="anchor4p2" style={{color:'#2B6EF0',paddingBottom:'0px'}}>See more</a></p></div>
                </div>

                <div className="videobar" style={{
                    height:"750px",
                    paddingTop:"5%",
                    paddingBottom:"5%",
                }}>
                    <div className="Header5p2">Project Videos</div>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RzVvThhjAKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="infobarflexgrid">
                    <div>
                        <p className="Header5p2" style={{paddingTop:'0'}}>How will we use your money</p>
                        <ul style={{color:'#233A3F',lineHeight:'24px'}}>
                            <li>Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida </li>
                            <li>eget pretium a mi. Consectetur non dignissim in nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat n</li>
                            <li>ascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condim</li>
                            <li>entum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo </li>
                        </ul>
                    </div>
                    <div className="btncontainerx">
                        <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                            <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                        </btn>
                        <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                            <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                        </btn>
                        <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                            <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                        </btn> 
                    </div>
                </div> 
            </div>   
        </Router>
    );
}

export default Projectdetail;